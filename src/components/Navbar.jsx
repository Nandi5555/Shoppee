import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { toggle } from "../redux/Slices/themeSlice";
import { useEffect } from "react";


const Navbar = () => {
  const logo = require("../Utilities/Shoppinglogo1.png");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => (state));
  const { theme } = useSelector((state) => (state));


  const changetheme = () => {
    dispatch(toggle());
  };


  useEffect(()=>{
    const body = document.body;
    if (theme) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [theme]);

  
  return (
    <nav className="flex flex-row justify-between items-center h-16 mx-auto max-w-6xl ">
      <NavLink to="/">
        <div className="ml-5">
          <img src={logo} alt="logo" className="h-11" />
        </div>
      </NavLink>
      <div className="flex flex-row  items-center font-medium mr-5 space-x-6">
        <div className="text-2xl cursor-pointer pt-2" onClick={changetheme}>
          <button className="transition duration-500 ease-in-out" >
            {theme ? <FaMoon className="w-6 h-6 text-slate-100" /> : <BsSun className="w-6 h-6" />}
          </button>
        </div>

        <NavLink to="/" className={theme ? "text-white" : "text-gray-900"}>
          Home
        </NavLink>

        <NavLink to="/cart" className="flex items-center">
          <div className="relative text-2xl">
            <FiShoppingCart className={theme ? "text-white" : "text-gray-900"} />
            {cart.length > 0 &&
              <span className="absolute p-2 -top-1 -right-2 text-xs w-3 h-3 bg-green-600 
              flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>}
          </div>

        </NavLink>
      </div>


    </nav >

  );
};

export default Navbar;
