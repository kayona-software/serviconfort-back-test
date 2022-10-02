//Methods to controlle the dni model
const DNIService = require('../services/dniService');
const logger = require('../utils/logger');

//If not recieved any condition in the request, then it will return all the DNIs
const getAllDNIs = (req, res) => {
    DNIService.getAllDNIs()
        .then(DNIs=>{
            res.send(DNIs);   
            logger.info('Devolviendo lista de tipo de DNI');   
        })
        .catch(err=>logger.error(err))     
};

const getOneDNI = (req, res) => {
    const DNI =DNIService.deleteDNI();
    res.send(`Get DNI with id: ${req.params.DNIId}`);
};

const createDNI = (req, res) => {
    const createdDNI =DNIService.createDNI();
    res.send("Create New DNI");
};

const updateDNI = (req, res) => {
    const updatedDNI =DNIService.updateDNI();
    res.send(`Update DNI with id: ${req.params.DNIId}`);
};

const deleteDNI = (req, res) => {
    const deletedDNI =  DNIService.deleteDNI();
    res.send(`Delete DNI with id: ${req.params.DNIId}`);
};

module.exports = {  getAllDNIs, getOneDNI, createDNI, updateDNI, deleteDNI };  //Export the methods to be used in the controller

