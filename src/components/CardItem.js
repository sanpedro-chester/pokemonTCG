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
        width: "160px",
        height: "220px",
        margin: "10px",
        perspective: "1000px",
        display: "inline-block",
        cursor: "pointer"
      }}
      onClick={handleFlip}
    >
      {/* FLIP CONTAINER */}
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

        {/* FRONT SIDE */}
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
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box"
          }}
        >
          <img
            src={card.images.small}
            alt={card.name}
            style={{
              width: "100%",
              height: "140px",
              objectFit: "contain"
            }}
          />

          <p style={{ color: "white", margin: "5px 0" }}>
            {card.name}
          </p>

          <button
            onClick={toggleFavorite}
            style={{
              backgroundColor: isFav ? "yellow" : "black",
              color: isFav ? "black" : "white",
              border: "1px solid yellow",
              padding: "4px",
              cursor: "pointer"
            }}
          >
            {isFav ? "📌 Pinned" : "📍 Pin"}
          </button>
        </div>

        {/* BACK SIDE */}
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