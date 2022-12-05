import React from 'react';
import style from './Cart.module.scss';

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className={style.cart}>
      {cart.map((item) => (
        <div key={item.id} className={style.cartItem}>
          <span>Selected Items: {cart.length}</span>
          <span>Total Price: ${item.price}</span>
          <span>Total Shipping Charge: ${}</span>
          <span>Tax: ${}</span>
          <p>Grand Total: ${}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
