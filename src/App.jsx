import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import React from 'react'
import { useSelector } from "react-redux";
import Thanks from "./pages/Thanks";


const App = () => {
  const { theme } = useSelector((state) => (state));

  return (
    <div>
      <div className={theme ? " bg-slate-800" : "bg-slate-300"}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
        <Route path="/feedback" Component={Thanks} />
      </Routes>
    </div>
  );
};

export default App;
