import React from 'react';
import { Product } from './Product';

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