//Business Logic for Model Product
const product = require('../database/Product');

const getAllProducts = () => {
    return product.getAllProducts();
};
  
const getOneProduct = () => {
    return;
};
  
const createProduct = () => {
    return;
};
  
const updateProduct = () => {
    return;
};
  
const deleteProduct = (ProductId) => {
    return product.deleteProduct(ProductId);
};
  
module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};