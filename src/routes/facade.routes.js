const express = require("express");
const router = express.Router();
const facadeController = require("../controllers/facade.controller");

router.get("/hospitals", facadeController.getHospitals);
router.get("/search", facadeController.searchPatientByIdentifier);
router.get("/patient/:patientId/full-record", facadeController.getPatientFullRecord);

module.exports = router;