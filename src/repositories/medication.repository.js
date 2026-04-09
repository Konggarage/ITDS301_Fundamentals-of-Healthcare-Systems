const pool = require("../config/db");

async function findMedicationsByPatientId(patientId) {
  const result = await pool.query(`
    SELECT
      id,
      patient_id,
      medication_code,
      medication_name,
      status,
      intent,
      dosage_text,
      authored_on
    FROM medication_requests
    WHERE patient_id = $1
    ORDER BY authored_on DESC
  `, [patientId]);

  return result.rows;
}

module.exports = {
  findMedicationsByPatientId
};