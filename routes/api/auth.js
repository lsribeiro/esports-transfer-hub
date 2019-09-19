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
		res.status(500).json({ type: "error", message: err.message });
	}
});

router.post('/', async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({email});
		if(!user) {
			return res.status(400).json({ type: "error", message: "User doesn't exist" });
		}

		user.comparePassword(password, (err, isMatch) => {
			if(err) {
				res.status(500).json({ type: "error", message: err.message });
			}

			if(!isMatch) {
				res.status(401).json({ type: "error", message: "Wrong password" });
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'}, (err, token) => {
					if(err) throw err;
					res.cookie('token', token, { httpOnly: true }).status(200).json({ type: "success", message: "Successfully logged in" });
				}
			);
		})
	} catch (err) {
		res.status(500).json({ type: "error", message: err.message });
	}
});

module.exports = router;
