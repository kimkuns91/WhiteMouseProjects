const express = require('express');

const router = express.Router();

const controller = require("../controllers/auth.controller");

router.get("/", controller.getAuth);
router.post("/", controller.signin);

module.exports = router;