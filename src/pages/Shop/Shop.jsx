import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import ProductItem from '../../components/ProductItem/ProductItem';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const AddToCartHandler = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => (product.id = selectedProduct));
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
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
