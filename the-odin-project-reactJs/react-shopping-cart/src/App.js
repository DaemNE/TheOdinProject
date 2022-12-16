import { Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./components/Catalog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
