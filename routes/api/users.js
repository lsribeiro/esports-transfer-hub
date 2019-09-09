const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

require('dotenv').config();

const User = require('../../models/User');

const router = express.Router();

module.exports = router;
