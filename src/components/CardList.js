import CardItem from "./CardItem";

function CardList({ cards }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "15px",
        padding: "10px",
        justifyItems: "center"
      }}
    >
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;