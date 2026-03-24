function CardItem({ card }) {
  return (
    <div style={{
      border: "2px solid yellow",
      padding: "10px",
      margin: "10px",
      width: "150px",
      textAlign: "center",
      backgroundColor: "#000",
      color: "#fff"
    }}>
      <img src={card.images.small} alt={card.name} style={{ width: "100%" }} />
      <p>{card.name}</p>
    </div>
  );
}

export default CardItem;