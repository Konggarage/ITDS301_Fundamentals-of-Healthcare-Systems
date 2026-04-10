const express = require("express");
const router = express.Router();
const facadeController = require("../controllers/facade.controller");

router.get("/search", facadeController.searchPatient);
router.get("/hospitals", facadeController.getHospitals);
router.get("/patient/:patientId/full-record", facadeController.getPatientFullRecord);

module.exports = router;