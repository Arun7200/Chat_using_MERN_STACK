const express = require('express');
const { sendMessage, getMessages } = require('../controllers/message.controller.js');
const protectRoute = require('../middleware/protectRoute.js');
const router = express.Router();

router.post("/:id", protectRoute, getMessages);
router.get("/send/:id", protectRoute, sendMessage);

module.exports = router;