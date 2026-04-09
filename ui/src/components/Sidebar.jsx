export default function Sidebar() {
    const menuItems = [
      { label: "Search Patient", href: "#search-section" },
      { label: "Patient", href: "#patient-section" },
      { label: "Encounter", href: "#encounter-section" },
      { label: "Medication", href: "#medication-section" }
    ];
  
    return (
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>HIE FHIR</h2>
          <p>Demo System</p>
        </div>
  
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="sidebar-link">
              {item.label}
            </a>
          ))}
        </nav>
  
        <div className="sidebar-footer">
          <small>Asoke Hospital</small>
          <small>Ohm Hospital</small>
        </div>
      </aside>
    );
  }