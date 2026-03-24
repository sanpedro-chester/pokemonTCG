import { useGetCardsQuery } from './services/pokemonApi';

function App() {
  const { data, error, isLoading } = useGetCardsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching data</h1>;

  return (
    <div>
      <h1>Pokemon Cards</h1>
      <p>Total cards fetched: {data.data.length}</p>
    </div>
  );
}

export default App;