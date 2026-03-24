import { useState } from 'react';
import { useGetCardsQuery } from './services/pokemonApi';
import CardList from './components/CardList';
import Pagination from './components/Pagination';

function App() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetCardsQuery(page);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching data</h1>;

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", textAlign: "center" }}>
      <h1>Pokemon Cards</h1>

      <CardList cards={data.data} />

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;