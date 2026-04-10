export default function MedicationList({ medications }) {
  return (
    <div className="card">
      <h2>Medication</h2>
      {medications.length === 0 ? (
        <p>No medication data</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Medication ID</th>
              <th>Year</th>
              <th>Status</th>
              <th>Intent</th>
              <th>Name</th>
              <th>Dosage / Treatment Detail</th>
              <th>Authored On</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((item) => {
              const medicationId = item.id || "-";
              const status = item.status || "-";
              const intent = item.intent || "-";
              const name =
                item.medicationCodeableConcept?.text || item.medication_name || "-";
              const dosage =
                item.dosageInstruction?.[0]?.text || item.dosage_text || "-";
              const authoredOn = item.authoredOn || item.authored_on || "-";
              const year =
                authoredOn && authoredOn !== "-" ? String(authoredOn).slice(0, 4) : "-";

              return (
                <tr key={medicationId}>
                  <td>{medicationId}</td>
                  <td>{year}</td>
                  <td>{status}</td>
                  <td>{intent}</td>
                  <td>{name}</td>
                  <td>{dosage}</td>
                  <td>{authoredOn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}