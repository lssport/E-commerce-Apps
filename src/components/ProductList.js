import React from 'react';
import { Product } from './Product';
import { Fee } from './Fee';

export const ProductList =
({ product }) => {
  return (
    <div>
      {product.map(product => (
        <Product key={product.id} {... product} />
      ))}
      </div>
  );
};