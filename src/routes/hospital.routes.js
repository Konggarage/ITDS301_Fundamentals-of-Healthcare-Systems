const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/hospital.controller");

router.get("/:hospitalCode/patients/:patientId", hospitalController.getPatientByHospitalAndPatientId);
router.get("/:hospitalCode/patients/:patientId/encounters", hospitalController.getEncountersByHospitalAndPatientId);
router.get("/:hospitalCode/patients/:patientId/medications", hospitalController.getMedicationsByHospitalAndPatientId);

module.exports = router;