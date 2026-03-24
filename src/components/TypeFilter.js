import { useState } from "react";

function TypeFilter({ setType }) {
  const types = [
    "All",
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water"
  ];

  const [activeType, setActiveType] = useState("All");

  const handleClick = (t) => {
    setActiveType(t);
    setType(t === "All" ? "" : t);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {types.map((t) => (
        <button
          key={t}
          onClick={() => handleClick(t)}
          style={{
            margin: "5px",
            padding: "6px 12px",
            border: "1px solid yellow",
            backgroundColor: activeType === t ? "yellow" : "#000",
            color: activeType === t ? "#000" : "yellow",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: activeType === t ? "0 0 12px yellow" : "none",
            transform: activeType === t ? "scale(1.1)" : "scale(1)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              activeType === t ? "scale(1.1)" : "scale(1)";
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default TypeFilter;