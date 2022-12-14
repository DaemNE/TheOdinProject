import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import React from 'react';
const LazyAbout = React.lazy(() => import("./components/About"))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>}/>
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts/>}></Route>
          <Route path={"featured"} element={<FeaturedProducts/>}></Route>
          <Route path={"new"} element={<NewProducts/>}></Route>
        </Route>
        <Route path={"users"} element={<Users />}>
          <Route path={":userId"} element={<UserDetails />}></Route>
          <Route path={"admin"} element={<Admin />}/>
        </Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
