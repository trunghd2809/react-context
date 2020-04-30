/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
interface Product {
  id: number,
  title: string,
  price: number,
};
interface Props {
  product: Product,
  addCart: any,
};
const Product = (props: Props) => {
  const { title, price } = props.product;
  const handleClick = (e: any) => {
    e.preventDefault();
    props.addCart(props.product);
  }
  return (
    <li>
      {title} - {price}
      <a
        href='#'
        onClick={handleClick}
      >
          Add to card
      </a>
    </li>
  );
};

export default Product;