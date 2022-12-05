import React from 'react';
import style from './ProductItem.module.scss';

const ProductItem = ({ product, AddToCartHandler }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div className={style.product__item}>
      <img src={img} alt="" />
      <span className={style.product__name}>{name}</span>
      <span className={style.product__price}>Price: ${price}</span>
      <span className={style.product__seller}>Manufacture: {seller}</span>
      <span className={style.product__rating}>Rating: {ratings} star</span>
      <button
        onClick={() => AddToCartHandler(product)}
        className={style.product__button}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
