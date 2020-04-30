import React from 'react';
interface product {
  id: number,
  title: string,
  price: number,
}
interface ContextProps {
  products: product[],
  addCart: (product: any) => void,
  carts: product[],
 };
const CartContext = React.createContext<Partial<ContextProps>>({});
export default CartContext;