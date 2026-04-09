export default function EncounterList({ encounters }) {
    return (
      <div className="card">
        <h2>Encounter</h2>
        {encounters.length === 0 ? (
          <p>No encounter data</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Encounter ID</th>
                <th>Status</th>
                <th>Class</th>
                <th>Reason</th>
                <th>Provider</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {encounters.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.status}</td>
                  <td>{item.class?.code}</td>
                  <td>{item.reasonCode?.[0]?.text}</td>
                  <td>{item.serviceProvider?.display}</td>
                  <td>{item.period?.start}</td>
                  <td>{item.period?.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }