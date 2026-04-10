import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SearchForm from "./components/SearchForm";
import PatientCard from "./components/PatientCard";
import EncounterList from "./components/EncounterList";
import MedicationList from "./components/MedicationList";

export default function App() {
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const requesterHospitalName = result?.requesterHospital?.name || "Ohm Hospital";
  const sourceHospitalName = result?.sourceHospital?.name || "No external data selected";

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <div className="container">
          <header className="page-header">
            <h1>{requesterHospitalName} (Hospital B)</h1>
            <p className="subtitle">
              Requesting external patient data from another hospital via HIE using FHIR
            </p>
          </header>

          <section className="info-banner requester-banner">
            <strong>Requester Hospital:</strong> {requesterHospitalName} (Hospital B)
          </section>

          <section className="card" id="request-section">
            <h2 className="section-title">Request Patient Data</h2>
            <p className="section-desc">
              หน้านี้เป็นมุมมองของฝั่งโรงพยาบาล B ที่ใช้ขอข้อมูลจากโรงพยาบาลภายนอกผ่าน HIE
              โดยข้อมูลที่ดึงมาได้จะเป็นแบบ read-only
            </p>

            <SearchForm setResult={setResult} setMessage={setMessage} />

            {message && <div className="error-box">{message}</div>}
          </section>

          <section className="info-banner source-banner">
            <strong>Data Source:</strong> {sourceHospitalName}
          </section>

          <section className="readonly-box">
            🔒 External patient data is read-only. Hospital B can view the data, but cannot directly edit Hospital A data.
          </section>

          <section id="patient-section">
            <PatientCard patient={result?.patient || null} />
          </section>

          <section id="encounter-section">
            <EncounterList encounters={result?.encounters || []} />
          </section>

          <section id="medication-section">
            <MedicationList medications={result?.medications || []} />
          </section>
        </div>
      </main>
    </div>
  );
}