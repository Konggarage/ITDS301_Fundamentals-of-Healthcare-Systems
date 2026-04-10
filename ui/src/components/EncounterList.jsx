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
            {encounters.map((item) => {
              const encounterId = item.id || "-";
              const status = item.status || "-";
              const encounterClass = item.class?.code || item.encounter_class || "-";
              const reason =
                item.reasonCode?.[0]?.text || item.reason_text || "-";
              const provider =
                item.serviceProvider?.display || item.service_provider_name || "-";
              const start = item.period?.start || item.start_time || "-";
              const end = item.period?.end || item.end_time || "-";

              return (
                <tr key={encounterId}>
                  <td>{encounterId}</td>
                  <td>{status}</td>
                  <td>{encounterClass}</td>
                  <td>{reason}</td>
                  <td>{provider}</td>
                  <td>{start}</td>
                  <td>{end}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}