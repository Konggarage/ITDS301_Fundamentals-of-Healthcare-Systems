export default function PatientCard({ patient }) {
  if (!patient) {
    return (
      <div className="card">
        <h2>Patient</h2>
        <p>No patient data requested yet</p>
      </div>
    );
  }

  const officialName = patient?.name?.[0];
  const fullNameFromFhir = officialName
    ? `${officialName?.given?.join(" ") || ""} ${officialName?.family || ""}`.trim()
    : "";

  const fullNameFromRaw = `${patient.first_name || ""} ${patient.last_name || ""}`.trim();

  const displayName = fullNameFromFhir || fullNameFromRaw || "-";
  const gender = patient.gender || "-";
  const birthDate = patient.birthDate || patient.birth_date || "-";
  const id = patient.id || "-";

  let hn = "-";
  let patientIdentifier = "-";

  if (Array.isArray(patient.identifier)) {
    const hnItem = patient.identifier.find((item) => item?.system?.includes("/hn"));
    const pidItem = patient.identifier.find((item) => item?.system?.includes("patient-identifier"));
    hn = hnItem?.value || patient.hn || "-";
    patientIdentifier = pidItem?.value || patient.patient_identifier || "-";
  } else {
    hn = patient.hn || "-";
    patientIdentifier = patient.patient_identifier || "-";
  }

  return (
    <div className="card">
      <h2>Patient</h2>
      <div className="readonly-tag">Read-only external patient data</div>

      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {displayName}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Birth Date:</strong> {birthDate}</p>
      <p><strong>HN:</strong> {hn}</p>
      <p><strong>Patient Identifier:</strong> {patientIdentifier}</p>
    </div>
  );
}