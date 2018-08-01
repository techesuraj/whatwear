import React from 'react';

class Navigation extends React.Component {
  render(){
  return (
    <nav className="navbar">
        <a href="#" className="what-logo">whateverwear</a>
        <div className="searchbar">
          <input type="text" placeholder="Search"/>
        </div>
      <ul className="navbar-group">
        <li className="navbar-group-link">Favorites</li>
        <li className="navbar-group-link">New</li>
        <li className="navbar-group-link">Add</li>
        <li className="navbar-group-link">
           <a href="#" onClick={this.props.loadSamples}>Load Shirts</a> 
        </li>
        
      </ul>
    </nav>
  )
  }
}

export default Navigation;