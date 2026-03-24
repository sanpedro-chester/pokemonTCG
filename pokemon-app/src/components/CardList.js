import CardItem from "./CardItem";

function CardList({ cards = [] }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 220px)",
      gap: "10px",
      padding: "10px",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;