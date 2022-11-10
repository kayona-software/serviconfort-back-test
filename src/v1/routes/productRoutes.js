//Products routes
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:ProductId", productController.getOneProduct);

router.post("/", productController.createProduct);

router.patch("/:ProductId", productController.updateProduct);

router.delete("/:ProductId", productController.deleteProduct);

module.exports = router;