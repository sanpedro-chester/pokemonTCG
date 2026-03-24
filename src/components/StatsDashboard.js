function StatsDashboard({ cards }) {
  const typeCount = {};

  cards.forEach((c) => {
    const types = c.types || ["Unknown"];
    types.forEach((t) => {
      typeCount[t] = (typeCount[t] || 0) + 1;
    });
  });

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      margin: "10px"
    }}>
      {Object.entries(typeCount).map(([type, count]) => (
        <div key={type} style={{
          border: "1px solid yellow",
          padding: "6px 10px",
          color: "yellow",
          fontSize: "12px"
        }}>
          {type}: {count}
        </div>
      ))}
    </div>
  );
}

export default StatsDashboard;