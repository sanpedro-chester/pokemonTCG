import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favoritesSlice';

function CardItem({ card }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFav = favorites.find((item) => item.id === card.id);

  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(card.id));
    } else {
      dispatch(addFavorite(card));
    }
  };

  return (
    <div
      style={{
        border: "2px solid yellow",
        padding: "10px",
        margin: "10px",
        width: "150px",
        textAlign: "center",
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 15px yellow";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={card.images.small}
        alt={card.name}
        style={{ width: "100%" }}
      />

      <p>{card.name}</p>

      <button
        onClick={toggleFavorite}
        style={{
          backgroundColor: isFav ? "yellow" : "black",
          color: isFav ? "black" : "white",
          border: "1px solid yellow",
          cursor: "pointer",
          marginTop: "5px",
          padding: "5px"
        }}
      >
        {isFav ? "📌 Pinned" : "📍 Pin"}
      </button>
    </div>
  );
}

export default CardItem;