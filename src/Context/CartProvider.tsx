import React, { useReducer } from 'react';
import CartContext from './CartContext';
import { CartReducer, ADD_CART } from './CartReducers';
interface Props {
  children: React.ReactElement,
};
const CartProvider = (props: Props) => {
  const products = [
    { id: 1, title: 'Gaming Mouse', price: 29.99 },
    { id: 2, title: 'Harry Potter 3', price: 9.99 },
    { id: 3, title: 'Used plastic bottle', price: 0.99 },
    { id: 4, title: 'Half-dried plant', price: 2.99 }
  ];
  const addToCart = (product: any) => {
    dispatch({ type: ADD_CART, product });
  };
  const [cartState, dispatch] = useReducer(CartReducer, { carts: [] });
  return (
    <CartContext.Provider value={{ 
      products,
      addCart: addToCart,
      carts: cartState.carts,
    }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;