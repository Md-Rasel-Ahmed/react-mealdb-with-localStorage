import React, { useEffect, useState } from "react";
import { getCart, localStoredItem } from "../../LocalStorage/localStorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Search from "../Searchproduct/Search";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.meals);
      });
  }, []);
  //   get local storage item
  useEffect(() => {
    let storedCart = getCart();
    let emty = [];
    for (const id in storedCart) {
      let findStoredCart = products.find((product) => product.idMeal === id);
      if (findStoredCart) {
        findStoredCart.quantity = storedCart[id];
        emty.push(findStoredCart);
      }
    }
    setCarts(emty);
  }, [products]);
  let randomePrice = 100;
  products.map((product) => {
    product.price = randomePrice++;
  });
  // product added of the click
  const handleClick = (id) => {
    let newCart;
    let exitsCart = carts.find((product) => product.idMeal === id.idMeal);
    // console.log(exitsCart);
    if (!exitsCart) {
      id.quantity = 1;
      newCart = [...carts, id];
    } else {
      let restCart = carts.filter((product) => product.idMeal !== id.idMeal);
      exitsCart.quantity = exitsCart.quantity + 1;
      newCart = [...restCart, exitsCart];
    }
    setCarts(newCart);
    localStoredItem(id.idMeal);
  };
  // increase single product quantity from cart
  const increase = (e) => {
    let storedCart = getCart();
    for (const id in storedCart) {
      if (id === e) {
        storedCart[id] = storedCart[id] + 1;
        localStorage.setItem("shoping", JSON.stringify(storedCart));
      }
    }
    setProducts([...products]);
  };
  // Decrease single product form the cart
  const decrease = (e) => {
    let storedCart = getCart();
    for (const id in storedCart) {
      if (id === e) {
        storedCart[id] = storedCart[id] - 1;
        localStorage.setItem("shoping", JSON.stringify(storedCart));
      }
    }
    setProducts([...products]);
  };
  // Delete item from cart
  const deleteItem = (deleteid) => {
    let storedCart = getCart();
    for (const id in storedCart) {
      if (id === deleteid) {
        delete storedCart[id];
        localStorage.setItem("shoping", JSON.stringify(storedCart));
      }
    }
    setProducts([...products]);
  };
  return (
    <div>
      {props.showCart ? (
        <Cart
          allCarts={carts}
          increase={increase}
          decrease={decrease}
          deleteItem={deleteItem}
        ></Cart>
      ) : (
        ""
      )}
      <div className="container mt-5">
        <Search rasel={products}></Search>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Product
                product={product}
                key={product.price}
                handleClick={() => handleClick(product)}
              ></Product>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
