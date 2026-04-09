export default function PatientCard({ patient }) {
    if (!patient) {
      return (
        <div className="card">
          <h2>Patient</h2>
          <p>No patient selected</p>
        </div>
      );
    }
  
    const officialName = patient?.name?.[0];
  
    return (
      <div className="card">
        <h2>Patient</h2>
        <p><strong>ID:</strong> {patient.id}</p>
        <p><strong>Name:</strong> {officialName?.given?.join(" ")} {officialName?.family}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Birth Date:</strong> {patient.birthDate}</p>
  
        <div>
          <strong>Identifiers:</strong>
          <ul>
            {patient.identifier?.map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }