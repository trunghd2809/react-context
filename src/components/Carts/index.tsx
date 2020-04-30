import React, { useContext } from 'react';
import withPage from '../Header/index';
import CartContext from '../../Context/CartContext';

const Carts = () => {
  const { carts = [] } = useContext(CartContext);
  return (
    <div>
      Cart ({carts.length})
    </div>
  );
};

export default withPage(Carts);