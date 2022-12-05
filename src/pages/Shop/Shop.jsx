import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import ProductItem from '../../components/ProductItem/ProductItem';
import style from './Shop.module.scss';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const AddToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className={style.shop__container}>
      <div className={style.product__container}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            AddToCartHandler={AddToCartHandler}
          ></ProductItem>
        ))}
      </div>
      <div className={style.cart__container}>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
