const facadeService = require("../services/facade.service");

async function searchPatient(req, res) {
  try {
    const { identifier } = req.query;

    if (!identifier) {
      return res.status(400).json({
        success: false,
        message: "identifier is required",
      });
    }

    const result = await facadeService.searchPatientByIdentifier(identifier, "OHM");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    return res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("searchPatient error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

async function getHospitals(req, res) {
  try {
    const hospitals = await facadeService.getHospitals();
    return res.json({
      success: true,
      data: hospitals,
    });
  } catch (error) {
    console.error("getHospitals error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

async function getPatientFullRecord(req, res) {
  try {
    const { patientId } = req.params;
    const result = await facadeService.getPatientFullRecord(patientId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Patient full record not found",
      });
    }

    return res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("getPatientFullRecord error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = {
  searchPatient,
  getHospitals,
  getPatientFullRecord,
};