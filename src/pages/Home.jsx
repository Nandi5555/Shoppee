import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const { theme } = useSelector((state) => (state));

  async function fetchdata() {
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    }
    catch (e) {
      console.log("Error in fetching data");
      setProducts([]);

    }
    setloading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);


  return (
    <div className={theme ? " bg-slate-600" : "bg-white"}>
      {loading
        ? <Spinner />
        : (products.length > 0 ?
          (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2 px-4 mx-auto space-y-10 space-x-5 min-h-[80vh] max-w-6xl" >
            {
              products.map((post) =>
                (<Product id={post.id} post={post} />))
            }
          </div>) :
          (<div className="flex justify-center items-center mt-[20%] text-xl">
            <span className={theme ? "text-slate-200" : "text-slate-800"}>No Data Found</span>
            
          </div>))}
    </div>
  );
};

export default Home;
