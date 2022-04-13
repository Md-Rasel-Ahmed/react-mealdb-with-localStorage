import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { useState } from "react";
import Search from "./components/Searchproduct/Search";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [seachVal, setSeachVal] = useState();
  const [searchPd, setSearchPd] = useState([]);
  const search = (e) => {
    setSeachVal(e.target.value);
  };
  const seachClick = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${seachVal}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchPd(data);
      });
  };
  return (
    <div className="Apps">
      <Header
        search={search}
        seachClick={seachClick}
        showCart={showCart}
        setShowCart={setShowCart}
      ></Header>
      <Search SeachProduct={searchPd.meals}></Search>
      <Shop showCart={showCart}></Shop>
    </div>
  );
}

export default App;
