export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Ohm Hospital</h2>
        <p>Hospital B System</p>
      </div>

      <nav className="sidebar-nav">
        <a href="#request-section" className="sidebar-link">Request Patient</a>
        <a href="#patient-section" className="sidebar-link">Patient</a>
        <a href="#encounter-section" className="sidebar-link">Encounter</a>
        <a href="#medication-section" className="sidebar-link">Medication</a>
      </nav>

      <div className="sidebar-footer">
        <small>Requester: Ohm Hospital</small>
        <small>External source example: Asoke Hospital</small>
      </div>
    </aside>
  );
}