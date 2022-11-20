//Customer routes

const express = require('express');
const OrderController = require('../controllers/orderController');

const router = express.Router();

router.get("/", OrderController.getAllOrders);

router.get("/:orderId/quotas", OrderController.getOrderQuotas);


module.exports = router;