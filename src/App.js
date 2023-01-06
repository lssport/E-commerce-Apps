import React, { useState } from 'react';
import { ProductList } from './components/ProductList';
import { Home } from './pages/Home';'

function App() {
    const [products] =
useState ([
   {
    id: 1,
    name: 'Product 1', 
    price: 9.99,
    description: 'This is Product 1'
   }, 
   {
     id: 2,
     name: 'Product 2', 
     price: 14.99,
     description: 'This is Product 2'
   }, 
   {
     id: 3,
     name: 'Product 3', 
     price: 19.99,
     description: 'This is Product 3'
   }  
 ]);
   return (
      <Home>
       <ProductList products={products} />
      </Home>
  );
}
export default App;
