import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeall } from "../redux/Slices/cartSlice";
import CartItem from "../components/CartItem"

const Cart = () => {
  const { cart } = useSelector((state) => (state))
  const [totalAmount, setTotalAmount] = useState(0);
  const { theme } = useSelector((state) => (state));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlecheckout = () => {
    dispatch(removeall());
    navigate("/feedback");
  }

  useEffect(() => {
    cart.length > 0 ? setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0).toPrecision(4)) : setTotalAmount(0);
    // console.log(totalAmount);
  }, [cart]);

  return (
    <div className={theme ? "bg-slate-600 h-full" : "bg-white h-full"}>
      <div className="pt-[2rem] max-w-6xl mx-auto flex items-center overflow-auto justify-center">
        {
          cart.length > 0 ? (
            <div className="flex flex-col md:flex-row space-x-0 h-full">
              <div className="flex flex-col gap-5 mx-auto mr-2rem justify-center items-center w-[60%] md:w-[60%] ">
                {
                  cart.map((item, index) => (
                    <div key={index}
                      className={`${index !== cart.length - 1 ? 'border-b-2 border-gray-600' : ''}`}>
                      <CartItem item={item} id={item.id} itemindex={index} />
                    </div>
                  ))
                }
              </div>

              <div className="flex flex-col justify-between px-16 pl-[1rem] w-full py-12 md:w-2/6 md:px-0">
                <div className="w-full">
                  <p className="text-green-400 font-semibold uppercase text-xl">Your Cart</p>
                  <p className="text-green-500 uppercase font-semibold text-5xl mb-5">Summary</p>
                  <span className=" uppercase font-semibold text-gray-400">Total Items: {cart.length}</span>
                </div>



                <div className="">
                  <p className="font-semibold text-xl text-gray-400">Total Amount: <span className="font-bold text-black">${(totalAmount)}</span></p>
                  <button className="mt-5 text-xl rounded-lg text-green-500 border-2 w-full py-2 border-green-600 hover:bg-green-700 hover:text-white
                transition duration-500 ease-in-out font-semibold"
                    onClick={handlecheckout}>Checkout</button>
                </div>

              </div>
            </div>


          ) :
            (<div className="flex justify-center items-center flex-col h-[100%] pt-[12rem]">
              <div className="text-center">
                <h1 className="mx-auto font-bold text-xl">
                  <span className={!theme ? " text-gray-500" : "text-white"}>Your Cart is empty!</span></h1>
                <Link to="/">
                  <button className="mt-5 text-xl rounded-lg text-green-700 border-2 py-2 px-16 border-green-600 hover:bg-green-700 hover:text-white
                transition duration-500 ease-in-out font-semibold">Shop now</button>
                </Link>
              </div>
            </div>)
        }
      </div >

    </div>);
};

export default Cart;
