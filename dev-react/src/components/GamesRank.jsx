import React, { useState } from 'react';
import gameList from '../data/game.json';
import '../styles/gamesRank.css';

const GamesRank = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleSearch = () => {
    const searchResults = Object.values(gameList)
      .filter(game => game.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 20);

    setResults(searchResults);
    setShowExplanation(false);
  };

  const getBackgroundClass = (score) => {
    if (score > 30) return 'score-highest';
    if (score > 20) return 'score-high';
    if (score > 10) return 'score-medium';
    return 'score-low';
  };

  return (
    <div className="search-container big-section">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a game..."
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
      {showExplanation ? (
        <div className="explanation-container">
          <h2 className="explanation-title">Color Scale Explanation</h2>
          <p className="explanation-text">Games are highlighted based on their score:</p>
          <ul className="explanation-list">
            <li className="score-highest explanation-item">Score > 30: Dark Green</li>
            <li className="score-high explanation-item">Score > 20: Light Green</li>
            <li className="score-medium explanation-item">Score > 10: Yellow</li>
            <li className="score-low explanation-item">Score ≤ 10: Red</li>
          </ul>
        </div>
      ) : (
        <div className="results-container">
          {results.length > 0 ? (
            <ul className="results-list">
              {results.map((game, index) => (
                <li key={index} className={`result-item ${getBackgroundClass(game.score)}`}>
                  <div className="game-name">{game.name}</div>
                  <div className="game-score">Score: {game.score}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GamesRank;
