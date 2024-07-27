import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Thanks() {
    const { theme } = useSelector((state) => (state));
    const navigate = useNavigate();
    

    return (
        <div className="flex justify-center items-center flex-col h-[100%] pt-[12rem]">
            <div className="text-center">
                <h1 className="mx-auto font-bold text-xl">
                    <span className={!theme ? " text-gray-500" : "text-white"}>Thanks for Shopping!</span></h1>
                <button className="mt-5 text-xl rounded-lg text-green-700 border-2 py-2 px-16 border-green-600 hover:bg-green-700 hover:text-white
    transition duration-500 ease-in-out font-semibold"
                onClick={() => {navigate("/")}}>Shop Again</button>

            </div>
        </div>)
}

export default Thanks