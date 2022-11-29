const express = require("express");
const {
  handleHomeRequest,
  createUser,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/", createUser);

module.exports = router;
