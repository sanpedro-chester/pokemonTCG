import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const [open, setOpen] = useState(false);
  const pinned = useSelector((state) => state.favorites?.favorites || []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "50px",
      backgroundColor: "#111",
      zIndex: 1000
    }}>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
        paddingRight: "15px"
      }}>
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
          ☰
        </button>
      </div>

      {open && (
        <div style={{
          position: "fixed",
          top: "50px",
          right: "10px",
          backgroundColor: "#000",
          border: "1px solid yellow",
          display: "flex",
          flexDirection: "column",
          minWidth: "180px",
          zIndex: 2000
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