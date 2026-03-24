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
      color: "#fff",
      textAlign: "center"
    }}>
      <h1>Pokemon Cards</h1>

      <TypeFilter setType={setType} />

      <div style={{ marginBottom: "20px" }}>
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
      </div>

      <CardList cards={data?.data || []} />

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

function NavBar() {
  const pinned = useSelector((state) => state.favorites.favorites);

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

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}