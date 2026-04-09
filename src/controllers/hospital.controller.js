const hospitalService = require("../services/hospital.service");
const { ok, fail } = require("../utils/response");

async function getPatientByHospitalAndPatientId(req, res) {
  try {
    const { hospitalCode, patientId } = req.params;
    const data = await hospitalService.getPatientResource(hospitalCode, patientId);

    if (!data) {
      return fail(res, 404, "Patient not found in hospital");
    }

    return ok(res, data, "FHIR Patient resource fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

async function getEncountersByHospitalAndPatientId(req, res) {
  try {
    const { hospitalCode, patientId } = req.params;
    const data = await hospitalService.getEncounterResources(hospitalCode, patientId);
    return ok(res, data, "FHIR Encounter resources fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

async function getMedicationsByHospitalAndPatientId(req, res) {
  try {
    const { hospitalCode, patientId } = req.params;
    const data = await hospitalService.getMedicationResources(hospitalCode, patientId);
    return ok(res, data, "FHIR MedicationRequest resources fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

module.exports = {
  getPatientByHospitalAndPatientId,
  getEncountersByHospitalAndPatientId,
  getMedicationsByHospitalAndPatientId
};