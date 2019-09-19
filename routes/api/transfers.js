const express = require('express');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const Transfer = require('../../models/Transfer');

router.post('/', auth, async (req, res) => {
	const transfer = req.body;

	try {
		let newTransfer = new Transfer(transfer);

		await newTransfer.save();
		res.json({ type: "success", message: "New transfer created successfully" });
	} catch(err) {
		res.status(500).json({ type: "error", message: err.message });
	}

});

router.get('/', async (req, res) => {
	try {
		const transfers = await Transfer.find();
		res.json(transfers);
	} catch(err) {
		res.status(500).json({ type: "error", message: err.message });
	}
});

router.get('/edit', auth, async (req, res) => {
	try {
		const transfers = await Transfer.find();
		res.json(transfers);
	} catch(err) {
		res.status(500).json({ type: "error", message: err.message });
	}
});

module.exports = router;
