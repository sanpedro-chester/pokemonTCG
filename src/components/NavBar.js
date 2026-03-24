import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const [open, setOpen] = useState(false);
  const pinned = useSelector((state) => state.favorites.favorites);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%",
      backgroundColor: "#111",
      padding: "10px",
      boxSizing: "border-box"
    }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "black",
            color: "yellow",
            border: "1px solid yellow",
            padding: "6px 10px",
            cursor: "pointer"
          }}
        >
          Menu
        </button>
      </div>

      {open && (
        <div style={{
          position: "absolute",
          right: "10px",
          top: "45px",
          backgroundColor: "#000",
          border: "1px solid yellow",
          display: "flex",
          flexDirection: "column",
          minWidth: "150px"
        }}>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            style={{ padding: "10px", color: "yellow", textDecoration: "none" }}
          >
            Home
          </Link>

          <Link
            to="/pinned"
            onClick={() => setOpen(false)}
            style={{ padding: "10px", color: "yellow", textDecoration: "none" }}
          >
            Pinned ({pinned.length})
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;