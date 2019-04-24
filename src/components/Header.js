import React from 'react';
import './Header.css';

const Header = (props) => {
  const { items, bill } = props.state;
  return (
    <div className='header'>
      <h1>Restaurant Menu</h1>
      <h2>Items: {items}</h2>
      <h3>Bill: {bill.toFixed(2)} &pound;</h3>
    </div>
  );
}

export default Header;