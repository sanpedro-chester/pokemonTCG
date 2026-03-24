import { useState, useEffect } from 'react';
import { useGetCardsQuery } from './services/pokemonApi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardList from './components/CardList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import NavBar from './components/NavBar';

import { useSelector } from 'react-redux';

function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const { data, error, isLoading } = useGetCardsQuery({
    page,
    search,
    type
  });

  const pinned = useSelector((state) => state.favorites?.favorites || []);

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
        alignItems: "center"
      }}>
        Loading Pokémon Cards...
      </div>
    );
  }

  if (error) return <h1 style={{ color: "yellow" }}>Error fetching data</h1>;

  return (
    <div style={{
      backgroundColor: "#000",
      minHeight: "100vh",
      color: "#fff",
      paddingTop: "70px",
      textAlign: "center"
    }}>
      <h1>
        <span style={{ color: "yellow" }}>Pokemon</span>
        <span style={{ color: "skyblue" }}>TCG</span>
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div style={{ margin: "15px 0" }}>
        <TypeFilter setType={setType} />
      </div>

      <div style={{
        display: "inline-block",
        padding: "5px 12px",
        border: "1px solid yellow",
        color: "yellow",
        fontFamily: "monospace",
        fontSize: "13px",
        marginBottom: "15px"
      }}>
        Showing {cardCount} cards
      </div>

      <CardList cards={data?.data || []} />
      <Pagination page={page} setPage={setPage} />
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
      paddingTop: "70px",
      textAlign: "center"
    }}>
      <h1>📌 Pinned Cards</h1>

      <CardList cards={pinned} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinned" element={<PinnedPage />} />
      </Routes>
    </Router>
  );
}