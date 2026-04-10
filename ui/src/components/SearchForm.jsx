import { useState } from "react";
import { searchPatient } from "../api";

export default function SearchForm({ setResult, setMessage }) {
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setResult(null);

    try {
      const res = await searchPatient(identifier);

      if (res.success) {
        setResult(res.data);
      } else {
        setMessage(res.message || "Patient not found");
      }
    } catch (error) {
      setMessage("Cannot connect to backend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter patient HN or identifier เช่น HN-A001, PID-A001, HN-O001"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Requesting..." : "Request via HIE"}
      </button>
    </form>
  );
}