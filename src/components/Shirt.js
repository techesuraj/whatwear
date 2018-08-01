import React from 'react';

const Shirt = (props) => {

  return (
    <li className="shirt-container">
      <img className="shirt-image" src={props.details.image} alt={props.details.name}/>
      <button>Wear</button>
    </li>
  );
}
export default Shirt;