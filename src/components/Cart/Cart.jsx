import React from 'react';
import style from './Cart.module.scss';

const Cart = ({ cart }) => {
  let quantity = 0;
  let price = 0;
  let shipping = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }

  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;

  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>Order Summary</h2>
      <span>Selected Items: {quantity}</span>
      <span>Total Price: ${price}</span>
      <span>Total Shipping Charge: ${shipping}</span>
      <span>Tax: ${tax}</span>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
