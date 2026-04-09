const hospitalRepository = require("../repositories/hospital.repository");
const patientRepository = require("../repositories/patient.repository");
const encounterRepository = require("../repositories/encounter.repository");
const medicationRepository = require("../repositories/medication.repository");
const {
  buildPatientResource,
  buildEncounterResource,
  buildMedicationRequestResource
} = require("./fhir.service");

async function getHospitals() {
  return hospitalRepository.findAllHospitals();
}

async function searchPatientByIdentifier(identifier) {
  const patient = await patientRepository.findPatientByIdentifier(identifier);
  if (!patient) return null;

  const encounters = await encounterRepository.findEncountersByPatientId(patient.id);
  const medications = await medicationRepository.findMedicationsByPatientId(patient.id);

  return {
    sourceHospital: {
      code: patient.hospital_code,
      name: patient.hospital_name
    },
    patient: buildPatientResource(patient),
    encounters: encounters.map((item) => buildEncounterResource(item, patient)),
    medications: medications.map((item) => buildMedicationRequestResource(item, patient))
  };
}

async function getPatientFullRecord(patientId) {
  const patient = await patientRepository.findPatientById(patientId);
  if (!patient) return null;

  const encounters = await encounterRepository.findEncountersByPatientId(patient.id);
  const medications = await medicationRepository.findMedicationsByPatientId(patient.id);

  return {
    sourceHospital: {
      code: patient.hospital_code,
      name: patient.hospital_name
    },
    bundle: {
      resourceType: "Bundle",
      type: "collection",
      entry: [
        { resource: buildPatientResource(patient) },
        ...encounters.map((item) => ({ resource: buildEncounterResource(item, patient) })),
        ...medications.map((item) => ({ resource: buildMedicationRequestResource(item, patient) }))
      ]
    }
  };
}

module.exports = {
  getHospitals,
  searchPatientByIdentifier,
  getPatientFullRecord
};