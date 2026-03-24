function TypeFilter({ setType }) {
  const types = ["", "Fire", "Water", "Grass", "Lightning"];

  return (
    <div style={{ marginBottom: "20px" }}>
      {types.map((t) => (
        <button
          key={t}
          onClick={() => setType(t)}
          style={{
            margin: "5px",
            padding: "8px",
            border: "2px solid yellow",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          {t === "" ? "All" : t}
        </button>
      ))}
    </div>
  );
}

export default TypeFilter;