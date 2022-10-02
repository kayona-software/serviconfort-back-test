//Methods to controlle the City model
const CityService = require('../services/cityService');
const logger = require('../utils/logger');

//If not recieved any condition in the request, then it will return all the Cities
const getAllCities = (req, res) => {
    CityService.getAllCities()
        .then(Citys=>{
            res.send(Citys);
            logger.info('Devolviendo lista de ciudades');   
        })
        .catch(err=>logger.error(err))    
};

const getOneCity = (req, res) => {
    const City =CityService.deleteCity();
    res.send(`Get City with id: ${req.params.CityId}`);
};

const createCity = (req, res) => {
    const createdCity =CityService.createCity();
    res.send("Create New City");
};

const updateCity = (req, res) => {
    const updatedCity =CityService.updateCity();
    res.send(`Update City with id: ${req.params.CityId}`);
};

const deleteCity = (req, res) => {
    const deletedCity =  CityService.deleteCity();
    res.send(`Delete City with id: ${req.params.CityId}`);
};

module.exports = {  getAllCities, getOneCity, createCity, updateCity, deleteCity };  //Export the methods to be used in the controller

