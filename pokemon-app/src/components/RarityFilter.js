function RarityFilter({ setRarity }) {
  const rarities = ["All", "Common", "Uncommon", "Rare", "Rare Holo", "Rare Ultra"];

  return (
    <div style={{ marginBottom: "10px" }}>
      {rarities.map((r) => (
        <button
          key={r}
          onClick={() => setRarity(r === "All" ? "" : r)}
          style={{
            margin: "5px",
            padding: "5px 10px",
            border: "1px solid yellow",
            backgroundColor: "#000",
            color: "yellow",
            transition: "0.3s",
            cursor: "pointer"
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

export default RarityFilter;