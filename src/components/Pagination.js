function Pagination({ page, setPage }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>Page: {page}</span>

      <button onClick={() => setPage((prev) => Math.min(prev + 1, 20))}>
        Next
      </button>
    </div>
  );
}

export default Pagination;