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