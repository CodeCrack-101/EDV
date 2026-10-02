import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) {
  const filters = ["All", "Python", "R", "Tableau", "Power BI", "SQL", "React"];

  return (
    <div className="search-section">
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          className="search-input"
          placeholder="Search practical, topic, technology or file..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="filter-container">
        {filters.map((filter) => (
          <button 
            key={filter}
            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
