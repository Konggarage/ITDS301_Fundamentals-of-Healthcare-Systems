const patientRepository = require("../repositories/patient.repository");
const encounterRepository = require("../repositories/encounter.repository");
const medicationRepository = require("../repositories/medication.repository");
const hospitalRepository = require("../repositories/hospital.repository");
const {
  buildPatientResource,
  buildEncounterResource,
  buildMedicationRequestResource,
} = require("./fhir.service");

async function searchPatientByIdentifier(identifier, requesterCode = "OHM") {
  const patient = await patientRepository.findPatientByIdentifier(identifier);
  if (!patient) return null;

  const encounters = await encounterRepository.findEncountersByPatientId(patient.id);
  const medications = await medicationRepository.findMedicationsByPatientId(patient.id);

  let requesterHospital = {
    code: "OHM",
    name: "Ohm Hospital",
  };

  if (requesterCode && requesterCode.toUpperCase() === "ASOKE") {
    requesterHospital = {
      code: "ASOKE",
      name: "Asoke Hospital",
    };
  }

  return {
    requesterHospital,
    sourceHospital: {
      code: patient.hospital_code,
      name: patient.hospital_name,
    },
    patient: buildPatientResource(patient),
    encounters: encounters.map((item) => buildEncounterResource(item, patient)),
    medications: medications.map((item) =>
      buildMedicationRequestResource(item, patient)
    ),
  };
}

async function getHospitals() {
  return hospitalRepository.findAllHospitals();
}

async function getPatientFullRecord(patientId) {
  const patient = await patientRepository.findPatientById(patientId);
  if (!patient) return null;

  const encounters = await encounterRepository.findEncountersByPatientId(patient.id);
  const medications = await medicationRepository.findMedicationsByPatientId(patient.id);

  return {
    sourceHospital: {
      code: patient.hospital_code,
      name: patient.hospital_name,
    },
    bundle: {
      resourceType: "Bundle",
      type: "collection",
      entry: [
        { resource: buildPatientResource(patient) },
        ...encounters.map((item) => ({
          resource: buildEncounterResource(item, patient),
        })),
        ...medications.map((item) => ({
          resource: buildMedicationRequestResource(item, patient),
        })),
      ],
    },
  };
}

module.exports = {
  searchPatientByIdentifier,
  getHospitals,
  getPatientFullRecord,
};