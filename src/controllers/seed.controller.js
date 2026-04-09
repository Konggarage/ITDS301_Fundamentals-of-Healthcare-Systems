const pool = require("../config/db");
const { ok, fail } = require("../utils/response");
const fs = require("fs");
const path = require("path");

async function resetSeed(req, res) {
  try {
    const initSqlPath = path.join(__dirname, "..", "sql", "init.sql");
    const seedSqlPath = path.join(__dirname, "..", "sql", "seed.sql");

    const initSql = fs.readFileSync(initSqlPath, "utf8");
    const seedSql = fs.readFileSync(seedSqlPath, "utf8");

    await pool.query(initSql);
    await pool.query(seedSql);

    return ok(res, null, "Database reset and seed completed");
  } catch (error) {
    return fail(res, 500, error.message);
  }
}

module.exports = {
  resetSeed
};