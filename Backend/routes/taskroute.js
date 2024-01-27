const express = require("express");
const router = express.Router();
const { index } = require("../controller/taskController");
router.route("/admin").get(index);

module.exports = router;
