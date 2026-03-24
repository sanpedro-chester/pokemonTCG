import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favoritesSlice';

function CardItem({ card }) {
  const [flipped, setFlipped] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFav = favorites.find((item) => item.id === card.id);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFav) {
      dispatch(removeFavorite(card.id));
    } else {
      dispatch(addFavorite(card));
    }
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      style={{
        width: "220px",
        height: "320px",
        margin: "12px",
        perspective: "1000px",
        display: "inline-block",
        cursor: "pointer"
      }}
      onClick={handleFlip}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            border: "2px solid yellow",
            borderRadius: "10px",
            backgroundColor: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px",
            boxSizing: "border-box"
          }}
        >
          <img
            src={card.images.small}
            alt={card.name}
            style={{
              width: "100%",
              height: "170px",
              objectFit: "contain"
            }}
          />

          <p style={{
            color: "white",
            margin: "5px 0 2px 0",
            fontWeight: "bold"
          }}>
            {card.name}
          </p>

          <div style={{
            fontSize: "12px",
            color: "#ccc",
            textAlign: "center",
            lineHeight: "1.3"
          }}>
            <div>Set: {card.set?.name || "Unknown"}</div>
            <div>Rarity: {card.rarity || "Unknown"}</div>
            <div>Type: {card.types?.join(", ") || "Unknown"}</div>
            <div>HP: {card.hp || "N/A"}</div>
          </div>

          <button
            onClick={toggleFavorite}
            style={{
              backgroundColor: isFav ? "yellow" : "black",
              color: isFav ? "black" : "white",
              border: "1px solid yellow",
              padding: "6px",
              marginTop: "6px",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            {isFav ? "📌 Pinned" : "📍 Pin"}
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "2px solid yellow",
            borderRadius: "10px",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src="https://images.pokemontcg.io/base1/back.png"
            alt="Card Back"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default CardItem;