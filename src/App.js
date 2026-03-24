import { useState, useEffect } from 'react';
import { useGetCardsQuery } from './services/pokemonApi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CardList from './components/CardList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';

import { useSelector } from 'react-redux';

function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const [hpMin, setHpMin] = useState("");
  const [hpMax, setHpMax] = useState("");
  const [setFilter, setSetFilter] = useState("");
  const [rarity, setRarity] = useState("");

  const pinned = useSelector((state) => state.favorites?.favorites || []);

  const { data, error, isLoading } = useGetCardsQuery({
    page,
    search,
    type,
    rarity,
    hpMin,
    hpMax,
    set: setFilter
  });

  const cardCount = data?.data?.length || 0;
  const rareCount = data?.data?.filter(c => c.rarity?.includes("Rare")).length || 0;
  const totalCount = data?.data?.length || 0;

  useEffect(() => {
    setPage(1);
  }, [search, type]);

  if (isLoading) {
    return (
      <div style={{
        backgroundColor: "#000",
        color: "yellow",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        fontSize: "20px"
      }}>
        Loading Pokémon Cards...
      </div>
    );
  }

  if (error) return <h1>Error fetching data</h1>;

  return (
    <div style={{
      backgroundColor: "#000",
      minHeight: "100vh",
      color: "#fff"
    }}>
      
      <h1 style={{ fontSize: "32px", textAlign: "center", marginBottom: "20px" }}>
        <span style={{ color: "yellow" }}>Pokemon</span>
        <span style={{ color: "skyblue" }}>TCG</span>
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "20px"
      }}>
        <div style={{ border: "1px solid yellow", padding: "8px", color: "yellow" }}>
          Total: {totalCount}
        </div>

        <div style={{ border: "1px solid yellow", padding: "8px", color: "yellow" }}>
          Rare: {rareCount}
        </div>

        <div style={{ border: "1px solid yellow", padding: "8px", color: "yellow" }}>
          Pinned: {pinned.length}
        </div>
      </div>

      <div style={{ display: "flex" }}>

        <div style={{
          width: "200px",
          borderRight: "1px solid yellow",
          padding: "10px"
        }}>
          <h3>Filters</h3>

          <TypeFilter setType={setType} />

          <input
            placeholder="Min HP"
            value={hpMin}
            onChange={(e) => setHpMin(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <input
            placeholder="Max HP"
            value={hpMax}
            onChange={(e) => setHpMax(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <input
            placeholder="Set"
            value={setFilter}
            onChange={(e) => setSetFilter(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <input
            placeholder="Rarity"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <SearchBar search={search} setSearch={setSearch} />

          <div style={{
            marginTop: "8px",
            display: "inline-block",
            padding: "4px 10px",
            border: "1px solid yellow",
            borderRadius: "6px",
            color: "yellow",
            fontFamily: "monospace",
            fontSize: "13px"
          }}>
            Showing {cardCount} cards
          </div>

          <CardList cards={data?.data || []} />

          <Pagination page={page} setPage={setPage} />
        </div>

      </div>
    </div>
  );
}

function PinnedPage() {
  const pinned = useSelector((state) => state.favorites?.favorites || []);

  return (
    <div style={{
      backgroundColor: "#000",
      minHeight: "100vh",
      color: "#fff",
      textAlign: "center"
    }}>
      <h1>📌 Pinned Cards</h1>

      {pinned.length === 0 ? (
        <h2>No pinned cards yet</h2>
      ) : (
        <CardList cards={pinned} />
      )}
    </div>
  );
}

function NavBar() {
  const pinned = useSelector((state) => state.favorites?.favorites || []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "10px",
      backgroundColor: "#111"
    }}>
      <Link to="/">Home</Link>
      <Link to="/pinned">Pinned ({pinned.length})</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />

      <div style={{
        transition: "opacity 0.4s ease",
        opacity: 1
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinned" element={<PinnedPage />} />
        </Routes>
      </div>

    </Router>
  );
}