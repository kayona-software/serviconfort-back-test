//Index of all routes for the API.

const users  = require("./userRoutes.js");
const customers = require("./customerRoutes.js");
const cities  = require("./cityRoutes.js");
const dni = require("./dniRoutes.js");
const products = require("./productRoutes.js");

module.exports={
    users,
    customers,
    cities,
    dni,
    products
};