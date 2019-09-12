const express = require('express');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const Transfer = require('../../models/Transfer');

router.post('/', auth, async (req, res) => {
	//TODO: Improve
	const { player, from_team, to_team, status, sources, game } = req.body;
	const transfer = {
		player,
		from_team,
		to_team,
		status,
		sources,
		game
	}

	try {
		let newTransfer = new Transfer(transfer);

		await newTransfer.save();
		res.json({msg: "success" });
	} catch(err) {
		console.log(err);
		res.status(500).send('Error POST api/transfers/');
	}

});

router.get('/', async (req, res) => {
	try {
		const transfers = await Transfer.find();
		res.json(transfers);
	} catch(err) {
		console.log(err);
		res.status(500).send('Error GET api/transfers/');
	}
});

router.get('/edit', auth, async (req, res) => {
	try {
		const transfers = await Transfer.find();
		res.json(transfers);
	} catch(err) {
		console.log(err);
		res.status(500).send('Error GET api/transfers/edit');
	}
});

module.exports = router;
