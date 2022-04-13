import React, { useEffect, useState } from "react";
import { getCart } from "../../LocalStorage/localStorage";
import Search from "../Searchproduct/Search";

const Header = (props) => {
  useEffect(() => {}, []);
  const showCartClick = () => {
    if (props.showCart) {
      props.setShowCart(false);
    }
    if (!props.showCart) {
      props.setShowCart(true);
    }
  };
  let quantity = 0;
  let storedCart = getCart();
  for (const id in storedCart) {
    quantity += storedCart[id];
  }

  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <button
                onClick={showCartClick}
                type="button"
                class="btn btn-primary position-relative"
              >
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quantity}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => props.search(e)}
              />
              <button
                onClick={props.seachClick}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
