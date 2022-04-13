import React from "react";

const Product = (props) => {
  //   console.log(props.product);
  const { idMeal, strMealThumb, strArea, strInstructions, strMeal, price } =
    props.product;
  return (
    <div>
      <div className="card m-2">
        <div className="card-img">
          <img className="img-fluid" src={strMealThumb} alt="" />
        </div>
        <div className="cart-title p-2">
          <h3>Name :{strMeal}</h3>
          <h3>Area :{strArea}</h3>
          <p>
            Price :$<strong>{price}</strong>
          </p>
        </div>
        <div className="card-foote ms-5 py-1">
          <button onClick={props.handleClick} className="btn btn-secondary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
