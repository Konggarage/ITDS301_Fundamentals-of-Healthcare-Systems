import { useEffect, useState } from "react";
import { getHospitals, searchPatient } from "./api";
import SearchForm from "./components/SearchForm";
import PatientCard from "./components/PatientCard";
import EncounterList from "./components/EncounterList";
import MedicationList from "./components/MedicationList";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [hospitals, setHospitals] = useState([]);
  const [identifier, setIdentifier] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadHospitals();
  }, []);

  async function loadHospitals() {
    try {
      const res = await getHospitals();
      if (res.success) {
        setHospitals(res.data);
      } else {
        setMessage(res.message || "Cannot load hospitals");
      }
    } catch (error) {
      setMessage("Cannot connect to backend");
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await searchPatient(identifier);
      if (res.success) {
        setResult(res.data);
      } else {
        setResult(null);
        setMessage(res.message || "Not found");
      }
    } catch (error) {
      setResult(null);
      setMessage("Cannot connect to backend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <div className="container">
          <header className="page-header">
            <h1>Health Information Exchange using FHIR</h1>
            <p className="subtitle">
              Search patient record from Asoke Hospital and Ohm Hospital through FHIR Facade
            </p>
          </header>

          <section id="search-section" className="card">
            <h2 className="section-title">Search Patient</h2>

            <div className="hint-box-inner">
              <div><strong>Available Hospitals:</strong></div>
              <ul>
                {hospitals.map((item) => (
                  <li key={item.id}>
                    {item.name} ({item.code})
                  </li>
                ))}
              </ul>

              <div className="example">
                Example identifiers: HN-A001, HN-A002, HN-O001, HN-O002, PID-A001, PID-O001
              </div>
            </div>

            <SearchForm
              identifier={identifier}
              setIdentifier={setIdentifier}
              handleSearch={handleSearch}
              loading={loading}
            />

            {message && <div className="error-box">{message}</div>}
          </section>

          <section className="source-box">
            <strong>Source Hospital:</strong>{" "}
            {result?.sourceHospital?.name || "No patient selected"}
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