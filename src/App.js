import React, { useState } from 'react';
import { ProductList } from './components/ProductList';
import { Home } from './pages/Home';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    <>
     <div>
       <h1 className='fw-bold'>E-commerce Apps</h1>
       <hr className='w-75 mx-auto' />
       <span className='d-flex'>marketplace in-net</span>
     <Home>
       <ProductList products={products} />
      </Home>
      </div>
     <div className='container'>
     <div className='row'>
      <div className='col-12 text-center'>
       <h1 className='fw-bold'>FEE APPS</h1>
        <hr className='w-75 mx-auto'/>
         <h2 className='fw-bold'>rp.1.500.000,-</h2>
          <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>
         </div/>
        </div>
    
     <div className='row'>
    <div className='col-6'>
   <div className='card-wrapper p-4'>
  <div className='icon-wrapper mb-1'>  
  </div>
  </div>
  <span className='title-sm'>pemasukan</span>
   <h3 className='fw-bold'>rp.2.000.000,-</h3>
   <div>
      <span className='title-sm text-ungu fw-bold'>50</span>
       <span className='title-sm'>transaksi</span>
         </div>
         </div>
         </div>
       <div className='row'>
    <div className='col-6'>
   <div className='card-wrapper p-4'>
  <div className='icon-wrapper mb-1'>  
</div>
        <span className='title-sm'>pengeluaran</span>
   <h3 className='fw-bold'>rp.2.000.000,-</h3>
   <div>
      <span className='title-sm text-ungu fw-bold'>50</span>
         <span className='title-sm'>transaksi</span>
         </div>
         </div>
         </div>
         
         </div>
         
       <div className='row mt-4'>
    <div className='col-12 d-flex justify-content-between align-items-center'>
   <h4>ringkasan transaksi</h4>
   <div className='wrapper-button'>
    <button className='button btn-ungu'>pemasukan<i class="bi bi-plus-circle-fill"></i></button>
    <button className='button btn-pink'>pengeluaran<i class="bi bi-dash-circle-fill"></i></button>
    </div>
    </div>
    </div>
<div className='row mt-4'>
    <div className='col-12 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
   <div className="card-wrapper">
  <div className="icon-wrapperr">
   </div>
     </div> 
     </div>
   <div className='transaction ms-2 d-flex flex-column'></div>
     </div>
</>
  );
}

export default App;
