const patientRepository = require("../repositories/patient.repository");
const encounterRepository = require("../repositories/encounter.repository");
const medicationRepository = require("../repositories/medication.repository");
const { buildPatientResource, buildEncounterResource, buildMedicationRequestResource } = require("./fhir.service");

async function getPatientResource(hospitalCode, patientId) {
  const patient = await patientRepository.findPatientByIdAndHospitalCode(patientId, hospitalCode);
  if (!patient) return null;

  return buildPatientResource(patient);
}

async function getEncounterResources(hospitalCode, patientId) {
  const patient = await patientRepository.findPatientByIdAndHospitalCode(patientId, hospitalCode);
  if (!patient) return [];

  const encounters = await encounterRepository.findEncountersByPatientId(patientId);
  return encounters.map((item) => buildEncounterResource(item, patient));
}

async function getMedicationResources(hospitalCode, patientId) {
  const patient = await patientRepository.findPatientByIdAndHospitalCode(patientId, hospitalCode);
  if (!patient) return [];

  const medications = await medicationRepository.findMedicationsByPatientId(patientId);
  return medications.map((item) => buildMedicationRequestResource(item, patient));
}

module.exports = {
  getPatientResource,
  getEncounterResources,
  getMedicationResources
};