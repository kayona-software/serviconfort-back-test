//City routes
const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.get("/", cityController.getAllCities);

router.get("/:CityId", cityController.getOneCity);

router.post("/", cityController.createCity);

router.patch("/:CityId", cityController.updateCity);

router.delete("/:CityId", cityController.deleteCity);

module.exports = router;