import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
  const pinnedCount = useSelector(
    (state) => state.favorites.favorites.length
  );

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "10px",
      backgroundColor: "#111",
      color: "yellow"
    }}>
      <Link to="/" style={{ color: "yellow" }}>Home</Link>

      <Link to="/pinned" style={{ color: "yellow" }}>
        📌 Pinned ({pinnedCount})
      </Link>
    </div>
  );
}

export default NavBar;