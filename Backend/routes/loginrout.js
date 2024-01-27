const express = require("express");
const router = express.Router();
const { logg } = require("../controller/logincontroller");
router.route("/").get(logg);

module.exports = router;
