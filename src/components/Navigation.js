import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
        <a href="#">whateverwear</a>
        <div className="searchbar">
          <input type="text" placeholder="Search"/>
        </div>
      <ul className="navbar-group">
        <li className="navbar-group-link">Favorites</li>
        <li className="navbar-group-link">New</li>
        <li className="navbar-group-link">Add</li>
      </ul>
    </nav>
  )
}

export default Navigation;