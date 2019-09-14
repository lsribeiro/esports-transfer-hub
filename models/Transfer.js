const mongoose = require('mongoose');

const Game = Object.freeze({
	CSGO: "csgo",
	LOL: "lol",
	DOTA: "dota"
});

const Status = Object.freeze({
	RUMOUR: 0,
	CONFIRMED: 1,
	FAILED: -1
});

const Team = {
	logo: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
};

const TransferSchema = new mongoose.Schema({
	player: {
		country: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
	},

	from_team: Team,
	to_team: Team,

	status: {
		type: Number,
		enum: Object.values(Status),
		required: true
	},
	sources: [
		{
			url: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			author: {
				type: String,
				required: true
			},
			origin: {
				type: String,
				required: true
			},
			date: {
				type: Date,
			}
		}
	],
	game: {
		type: String,
		enum: Object.values(Game),
		required: true
	}

});

Object.assign(TransferSchema.statics, {
	Status,
	Game
});


module.exports = mongoose.model('Transfer', TransferSchema);
