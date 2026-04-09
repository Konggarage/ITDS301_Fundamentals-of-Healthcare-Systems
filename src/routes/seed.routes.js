const express = require("express");
const router = express.Router();
const seedController = require("../controllers/seed.controller");

router.post("/reset", seedController.resetSeed);

module.exports = router;