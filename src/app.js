const express = require("express");
const cors = require("cors");

const facadeRoutes = require("./routes/facade.routes");
const hospitalRoutes = require("./routes/hospital.routes");
const seedRoutes = require("./routes/seed.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "HIE FHIR backend is running"
  });
});

app.use("/api/facade", facadeRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/seed", seedRoutes);

module.exports = app;