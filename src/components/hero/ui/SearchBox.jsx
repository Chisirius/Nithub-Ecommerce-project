export function SearchBox() {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search produce..."
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      <button className="search-button">+</button>
    </div>
  );
}
