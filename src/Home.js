import { useState } from 'react';
import { gamesData } from './data';

function Home() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('title');

  let filteredGames = gamesData.filter(game => 
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  filteredGames.sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'year') {
      return b.year - a.year;
    }
    return 0;
  });

  return (
    <div className="home-page">
      <div className="controls">
        <input 
          type="text" 
          placeholder="Search games..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Alphabetical</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="year">Newest First</option>
        </select>
      </div>

      <div className="grid">
        {filteredGames.map(game => (
          <div key={game.id} className="card">
            <h3>{game.title}</h3>
            <p>Genre: {game.genre}</p>
            <p>Year: {game.year}</p>
            <p className="price">${game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;