const pool = require("../config/db");

async function findPatientByIdentifier(identifier) {
  const result = await pool.query(`
    SELECT
      p.id,
      p.patient_identifier,
      p.hn,
      p.first_name,
      p.last_name,
      p.gender,
      p.birth_date,
      p.hospital_id,
      h.code AS hospital_code,
      h.name AS hospital_name
    FROM patients p
    JOIN hospitals h ON h.id = p.hospital_id
    WHERE p.patient_identifier = $1 OR p.hn = $1
    LIMIT 1
  `, [identifier]);

  return result.rows[0] || null;
}

async function findPatientByIdAndHospitalCode(patientId, hospitalCode) {
  const result = await pool.query(`
    SELECT
      p.id,
      p.patient_identifier,
      p.hn,
      p.first_name,
      p.last_name,
      p.gender,
      p.birth_date,
      p.hospital_id,
      h.code AS hospital_code,
      h.name AS hospital_name
    FROM patients p
    JOIN hospitals h ON h.id = p.hospital_id
    WHERE p.id = $1 AND h.code = $2
    LIMIT 1
  `, [patientId, hospitalCode]);

  return result.rows[0] || null;
}

async function findPatientById(patientId) {
  const result = await pool.query(`
    SELECT
      p.id,
      p.patient_identifier,
      p.hn,
      p.first_name,
      p.last_name,
      p.gender,
      p.birth_date,
      p.hospital_id,
      h.code AS hospital_code,
      h.name AS hospital_name
    FROM patients p
    JOIN hospitals h ON h.id = p.hospital_id
    WHERE p.id = $1
    LIMIT 1
  `, [patientId]);

  return result.rows[0] || null;
}

module.exports = {
  findPatientByIdentifier,
  findPatientByIdAndHospitalCode,
  findPatientById
};