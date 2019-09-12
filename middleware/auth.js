const jwt = require('jsonwebtoken');

require('dotenv').config();

auth = (req, res, next) => {
	const token = req.headers['x-access-token'] ||
				  req.cookies.token;

	if(!token) {
		return res.status(401).json({msg: 'Authorization denied'});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			req.user = decoded.user;
			next();
		});
	} catch(err) {
		res.status(401).json({msg: 'Invalid token'});
	}
};

module.exports = auth;
