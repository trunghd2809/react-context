import React, { useContext } from 'react';
import withPage from '../Header/index';
import Product from './Product';
import CartContext from '../../Context/CartContext';

interface Props {};
const Products = (props: Props) => {
  const { products = [], addCart } = useContext(CartContext);
  return (
    <div className='product-list'>
      <ul>
        {products.map((p) => (
          <Product key={p.id} product={p} addCart={addCart}/>
        ))}
      </ul>
    </div>
  );
};

export default withPage(Products);