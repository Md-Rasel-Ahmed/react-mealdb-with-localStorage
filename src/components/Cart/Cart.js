import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
const Cart = (props) => {
  const { allCarts } = props;
  let totalPrice = 0;
  let taxt = 0;
  let garanTotal = 0;
  let quantity;
  for (const cart of allCarts) {
    totalPrice += cart.price * cart.quantity;
    taxt += totalPrice * 0.1;
    garanTotal = totalPrice + taxt;
    quantity = cart.quantity;
  }
  return (
    <div className="cart bg-primary ">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {allCarts.map((item) =>
            item.quantity > 0 ? (
              <tr key={item.idMeal}>
                <td>
                  <b>{item.strMeal}</b>
                </td>
                <td>
                  <button
                    onClick={() => props.increase(item.idMeal)}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  <b className="p-2 fs-5">{item.quantity}</b>
                  <button
                    onClick={() => props.decrease(item.idMeal)}
                    className="btn btn-info "
                  >
                    -
                  </button>
                  <button
                    onClick={() => props.deleteItem(item.idMeal)}
                    className="btn btn-danger ms-2"
                  >
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </button>
                </td>
                <td>${item.price}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Total Price</th>
            <th scope="col">${totalPrice}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Taxt</th>
            <th scope="col">${taxt.toFixed(0)}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Grand Total</th>
            <th scope="col">${garanTotal.toFixed(0)}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

/* 
<table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            <tr>
              <td>fjff</td>
              <td>fjff</td>
              <td>fjff</td>
            </tr>;
          })}
        </tbody>

        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Total Price</th>
            <th scope="col">{totalPrice}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Taxt</th>
            <th scope="col">{taxt}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Grand Total</th>
            <th scope="col">{garanTotal}</th>
          </tr>
        </thead>
      </table>
*/
export default Cart;
