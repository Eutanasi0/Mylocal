import  { useState, useEffect } from 'react';
import './search.css';
import bandsData from '../data/bandas.json'; 
import Results from './results';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBands, setFilteredBands] = useState(bandsData);

  useEffect(() => {
    setFilteredBands(
      bandsData.filter(band => 
        (typeof band.banda === 'string' && band.banda.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (typeof band.genero === 'string' && band.genero.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof band.departamento === 'string' && band.departamento.toLowerCase().includes(searchTerm.toLowerCase())
          )   
        )

    );
    
  }, [searchTerm]);

  const displayedBands = filteredBands.slice(0, 8);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Buscar</button>
      </div>
      <Results bands={displayedBands} /> 
    </div>
  );
};

export default Search;
