import { useState } from 'react';
import practicalsData from '../data/practicals';
import SearchBar from '../components/SearchBar';
import PracticalCard from '../components/PracticalCard';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPracticals = practicalsData.filter(practical => {
    const query = searchQuery.toLowerCase();
    
    // Check search query matches
    const matchesSearch = 
      practical.title.toLowerCase().includes(query) ||
      practical.technology.toLowerCase().includes(query) ||
      practical.description.toLowerCase().includes(query) ||
      `practical ${practical.id}`.includes(query) ||
      practical.tags.some(tag => tag.toLowerCase().includes(query)) ||
      practical.files.some(f => f.name.toLowerCase().includes(query)) ||
      practical.code.some(c => c.title.toLowerCase().includes(query) || c.language.toLowerCase().includes(query));
      
    // Check filter match
    const matchesFilter = selectedFilter === 'All' || practical.technology === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Practical Library</h1>
        <p className="hero-subtitle">All your practical codes, files and commands in one place.</p>
        
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      
      <div className="results-container">
        {filteredPracticals.length > 0 ? (
          <div className="practical-grid">
            {filteredPracticals.map(practical => (
              <PracticalCard key={practical.id} practical={practical} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h2>No practicals found.</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
