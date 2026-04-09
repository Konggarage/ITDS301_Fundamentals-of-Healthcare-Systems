export default function SearchForm({ identifier, setIdentifier, handleSearch, loading }) {
    return (
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Enter patient HN or identifier"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    );
  }