function Loading() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      flexDirection: "column"
    }}>
      
      <svg
        width="120"
        height="200"
        viewBox="0 0 100 200"
        style={{
          animation: "electricPulse 1s infinite ease-in-out"
        }}
      >
        <polygon
          points="50,0 20,100 55,100 30,200 80,90 45,90"
          fill="yellow"
          style={{
            filter: "drop-shadow(0 0 10px yellow)"
          }}
        />
      </svg>

      <style>
        {`
          @keyframes electricPulse {
            0% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.15); filter: brightness(1.8); }
            100% { transform: scale(1); filter: brightness(1); }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;