//Methods to controlling the Product model
const ProductService = require('../services/productService');
const logger = require('../utils/logger');

//If not recieved any condition in the request, then it will return all the Products
const getAllProducts = (req, res) => {
    ProductService.getAllProducts()
        .then(Products=>{
            res.send(Products);
            logger.info('Devolviendo lista de productos');   
        })
        .catch(err=>{
            res.status(500).send('Not Found');
            logger.error(err);
        })     
};

const getOneProduct = (req, res) => {
    const Product =ProductService.getProduct();
    res.send(`Get Product with id: ${req.params.ProductId}`);
};

const createProduct = (req, res) => {
    const createdProduct =ProductService.createProduct();
    res.send("Create New Product");
};

const updateProduct = (req, res) => {
    const updatedProduct =ProductService.updateProduct();
    res.send(`Update Product with id: ${req.params.ProductId}`);
};

const deleteProduct = (req, res) => {
    ProductService.deleteProduct(req.params.ProductId)
        .then(()=>{
            res.send([`Producto con id: ${req.params.ProductId} eliminado`]); //Verificar que se hace con el res
            logger.info(`Producto con id: ${req.params.ProductId} eliminado`);
        })
        .catch(err=>{
            res.status(500).send('Not Found');
            logger.error(err);
        }) 
};

module.exports = {  getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct };  //Export the methods to be used in the controller

