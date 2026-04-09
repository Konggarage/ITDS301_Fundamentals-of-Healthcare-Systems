const facadeService = require("../services/facade.service");
const { ok, fail } = require("../utils/response");

async function getHospitals(req, res) {
  try {
    const data = await facadeService.getHospitals();
    return ok(res, data, "Hospital list fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

async function searchPatientByIdentifier(req, res) {
  try {
    const { identifier } = req.query;

    if (!identifier) {
      return fail(res, 400, "identifier is required");
    }

    const data = await facadeService.searchPatientByIdentifier(identifier);
    if (!data) {
      return fail(res, 404, "Patient not found");
    }

    return ok(res, data, "Patient summary fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

async function getPatientFullRecord(req, res) {
  try {
    const { patientId } = req.params;
    const data = await facadeService.getPatientFullRecord(patientId);

    if (!data) {
      return fail(res, 404, "Patient full record not found");
    }

    return ok(res, data, "Patient full record fetched successfully");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

module.exports = {
  getHospitals,
  searchPatientByIdentifier,
  getPatientFullRecord
};