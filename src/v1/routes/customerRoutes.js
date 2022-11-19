//Customer routes

const express = require('express');
const CustomerController = require('../controllers/customerController');

const router = express.Router();

router.get("/", CustomerController.getAllCustomers);

router.get("/select", CustomerController.getResumeCustomers);

router.get("/:CustomerId/openorders", CustomerController.getOpenOrders);

router.get("/:CustomerId", CustomerController.getOneCustomer);

router.post("/", CustomerController.createCustomer);

router.patch("/:CustomerId", CustomerController.updateCustomer);

router.delete("/:CustomerId", CustomerController.deleteCustomer);

module.exports = router;