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
     <div>
       <h1>E-commerce Apps</h1>
       <span>marketplace in-net</span>
     <Home>
       <ProductList products={products} />
      </Home>
      </div>
   );
}
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
