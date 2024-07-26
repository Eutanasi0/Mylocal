import { useState } from 'react';
import './menubar.css';
import Home from './home.jsx';
import Search from './search.jsx';

const MenuBar = () => {
  const [selectedSection, setSelectedSection] = useState('home');

  const handleHomeClick = () => {
    setSelectedSection('home');
  };

  const handleSearchClick = () => {
    setSelectedSection('search');
  };

  return (
    <div>
      <div className="menu-bar">
        <div className="menu-item" onClick={handleHomeClick}>Home</div>
        <div className="menu-item" onClick={handleSearchClick}>Search</div>
      </div>
      <div className="content">
        {selectedSection === 'home' && <Home />}
        {selectedSection === 'search' && <Search />}
      </div>
    </div>
  );
};

export default MenuBar;
