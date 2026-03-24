import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: "fixed",
      top: 10,
      right: 10
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "black",
          color: "yellow",
          border: "1px solid yellow",
          padding: "8px"
        }}
      >
        ☰ Menu
      </button>

      {open && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111",
          border: "1px solid yellow",
          marginTop: "5px"
        }}>
          <Link to="/" style={{ color: "yellow", padding: "5px" }}>Home</Link>
          <Link to="/pinned" style={{ color: "yellow", padding: "5px" }}>Pinned</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;