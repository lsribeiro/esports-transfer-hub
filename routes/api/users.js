const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

require('dotenv').config();

const User = require('../../models/User');

const router = express.Router();

router.post('/', async (req,res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if(user) {
			return res.status(400).json({ type: "error", message: "User already exists" });
		}

		user = new User({ email, password });

		await user.save();

		const payload = {
			user: {
				id: user.id
			}
		};

		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
				if(err) throw err;
				res.json({ token });
			}
		);

	} catch(err) {
		console.log(err);
		res.status(500).json({ type: "error", message: err.message });
	}
});

module.exports = router;
