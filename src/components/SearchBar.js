function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
          border: "2px solid yellow",
          backgroundColor: "#000",
          color: "#fff"
        }}
      />
    </div>
  );
}

export default SearchBar;