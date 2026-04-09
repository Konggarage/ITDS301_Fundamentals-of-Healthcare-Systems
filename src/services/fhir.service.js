function buildPatientResource(patient) {
    return {
      resourceType: "Patient",
      id: patient.id,
      identifier: [
        {
          system: `https://hie.local/hospital/${patient.hospital_code}/patient-identifier`,
          value: patient.patient_identifier
        },
        {
          system: `https://hie.local/hospital/${patient.hospital_code}/hn`,
          value: patient.hn
        }
      ],
      name: [
        {
          use: "official",
          family: patient.last_name,
          given: [patient.first_name]
        }
      ],
      gender: patient.gender,
      birthDate: patient.birth_date,
      managingOrganization: {
        display: patient.hospital_name
      }
    };
  }
  
  function buildEncounterResource(encounter, patient) {
    return {
      resourceType: "Encounter",
      id: encounter.id,
      identifier: [
        {
          system: `https://hie.local/encounter`,
          value: encounter.encounter_identifier
        }
      ],
      status: encounter.status,
      class: {
        code: encounter.encounter_class
      },
      subject: {
        reference: `Patient/${patient.id}`,
        display: `${patient.first_name} ${patient.last_name}`
      },
      serviceProvider: {
        display: encounter.service_provider_name
      },
      reasonCode: [
        {
          text: encounter.reason_text
        }
      ],
      period: {
        start: encounter.start_time,
        end: encounter.end_time
      }
    };
  }
  
  function buildMedicationRequestResource(medication, patient) {
    return {
      resourceType: "MedicationRequest",
      id: medication.id,
      status: medication.status,
      intent: medication.intent,
      subject: {
        reference: `Patient/${patient.id}`,
        display: `${patient.first_name} ${patient.last_name}`
      },
      medicationCodeableConcept: {
        coding: [
          {
            system: "https://hie.local/medication-codes",
            code: medication.medication_code,
            display: medication.medication_name
          }
        ],
        text: medication.medication_name
      },
      authoredOn: medication.authored_on,
      dosageInstruction: [
        {
          text: medication.dosage_text
        }
      ]
    };
  }
  
  module.exports = {
    buildPatientResource,
    buildEncounterResource,
    buildMedicationRequestResource
  };