const pool = require("../config/db");

async function findAllHospitals() {
  const result = await pool.query(`
    SELECT id, code, name
    FROM hospitals
    ORDER BY name
  `);
  return result.rows;
}

async function findHospitalByCode(code) {
  const result = await pool.query(`
    SELECT id, code, name
    FROM hospitals
    WHERE code = $1
    LIMIT 1
  `, [code]);

  return result.rows[0] || null;
}

module.exports = {
  findAllHospitals,
  findHospitalByCode
};