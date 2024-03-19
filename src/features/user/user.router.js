const express = require('express');
const userrouter = express.Router();
const UserControlle = require('./user.controller');
userrouter.post('/adduser',UserControlle.addUser );
userrouter.post('/login', UserControlle.login);

module.exports = userrouter; 