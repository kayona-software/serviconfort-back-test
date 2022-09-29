//DNI routes

const express = require('express');
const DNIController = require('../controllers/dniController');

const router = express.Router();

router.get("/", DNIController.getAllDNIs);

router.get("/:DNIId", DNIController.getOneDNI);

router.post("/", DNIController.createDNI);

router.patch("/:DNIId", DNIController.updateDNI);

router.delete("/:DNIId", DNIController.deleteDNI);

module.exports = router;