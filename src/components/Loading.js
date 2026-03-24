function Loading() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000"
    }}>
      <div style={{
        width: "60px",
        height: "100px",
        position: "relative",
        animation: "flash 1s infinite"
      }}>
        <div style={{
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: "40px solid yellow",
          position: "absolute",
          left: "15px"
        }}></div>

        <div style={{
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "40px solid yellow",
          position: "absolute",
          top: "30px",
          left: "15px"
        }}></div>
      </div>

      <style>
        {`
          @keyframes flash {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;