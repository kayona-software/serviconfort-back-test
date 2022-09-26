//User routes

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getOneUser);

router.post("/", userController.createUser);

router.patch("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;