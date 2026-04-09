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
              {medications.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.authoredOn ? String(item.authoredOn).slice(0, 4) : "-"}</td>
                  <td>{item.status}</td>
                  <td>{item.intent}</td>
                  <td>{item.medicationCodeableConcept?.text}</td>
                  <td>{item.dosageInstruction?.[0]?.text}</td>
                  <td>{item.authoredOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }