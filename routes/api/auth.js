const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch(err) {
		console.log(err);
		res.status(500).send({msg: 'error'});
	}
});

router.post('/', async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({email});
		if(!user) {
			return res.status(400).json({msg: 'User doesn\'t exist'}); //TODO: Better error handling
		}

		//TODO: Implement this on User schema
		const pw_match = await bcrypt.compare(password, user.password);

		if(!pw_match) {
			return res.status(400).json({msg: 'Wrong password'});
		}

		const payload = {
			user: {
				id: user.id
			}
		};

		//TODO: Put it in a function
		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'},
			(err, token) => {
				if(err) throw err;
				res.cookie('token', token, { httpOnly: true }).sendStatus(200);
			}
		);
	} catch (err) {
		console.log(err);
		res.status(500).send('Server error');
	}
});

module.exports = router;
