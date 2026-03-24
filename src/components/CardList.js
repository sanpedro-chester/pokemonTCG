import CardItem from './CardItem';

function CardList({ cards }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;