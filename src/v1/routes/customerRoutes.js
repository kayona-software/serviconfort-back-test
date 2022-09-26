//Customer routes

const express = require('express');
const CustomerController = require('../controllers/CustomerController');

const router = express.Router();

router.get("/", CustomerController.getAllCustomers);

router.get("/:CustomerId", CustomerController.getOneCustomer);

router.post("/", CustomerController.createCustomer);

router.patch("/:CustomerId", CustomerController.updateCustomer);

router.delete("/:CustomerId", CustomerController.deleteCustomer);

module.exports = router;