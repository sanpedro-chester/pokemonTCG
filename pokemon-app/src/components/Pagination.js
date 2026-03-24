import React from 'react';

function Pagination({ page, setPage }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      marginTop: "20px",
      paddingBottom: "20px"
    }}>
      
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        style={{
          backgroundColor: "black",
          border: "1px solid yellow",
          color: "yellow",
          fontSize: "22px",
          width: "45px",
          height: "45px",
          cursor: "pointer",
          transition: "0.2s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 0 12px yellow";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.transform = "scale(1)";
        }}
      >
        ←
      </button>

      <div style={{
        color: "yellow",
        fontFamily: "monospace",
        fontSize: "14px"
      }}>
        Page {page}
      </div>

      <button
        onClick={() => setPage((p) => p + 1)}
        style={{
          backgroundColor: "black",
          border: "1px solid yellow",
          color: "yellow",
          fontSize: "22px",
          width: "45px",
          height: "45px",
          cursor: "pointer",
          transition: "0.2s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 0 12px yellow";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.transform = "scale(1)";
        }}
      >
        →
      </button>

    </div>
  );
}

export default Pagination;