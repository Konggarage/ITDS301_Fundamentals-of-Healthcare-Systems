const pool = require("../config/db");

async function findEncountersByPatientId(patientId) {
  const result = await pool.query(`
    SELECT
      id,
      patient_id,
      encounter_identifier,
      status,
      encounter_class,
      reason_text,
      service_provider_name,
      start_time,
      end_time
    FROM encounters
    WHERE patient_id = $1
    ORDER BY start_time DESC
  `, [patientId]);

  return result.rows;
}

module.exports = {
  findEncountersByPatientId
};