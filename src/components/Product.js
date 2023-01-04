import React from 'react';

export const Product = ({
  id, name, price, 
  description }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    );
  };