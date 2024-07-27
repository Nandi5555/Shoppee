
import { AiFillStar } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {

  const { cart } = useSelector((state) => (state));
  const dispatch = useDispatch();
  const addtocart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removefromcart = () => {
    dispatch(remove(post.id));
    toast.success("Item Remove from cart");
  }
  return (
    <div className="flex flex-col bg-white justify-center items-center hover:scale-105 hover:shadow-[rgba(0,_0,_0,0.5)_0px_30px_90px]
    transition duration-300 ease-in-out gap-3 rounded-xl mt-10 p-4 pb-4 ml-4 border shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
      <div className="">
        <p className="text-gray-700 text-lg leading-5 mt-0.5 font-semibold text-left w-40">{post.title.split(",").at(0)}</p>
      </div>

      <div>
        <p className="text-[10px] text-gray-500 w-40">{post.description.substr(0, 80)}...</p>
      </div>

      <div className="h-40">
        <img src={post.image} alt="product" className="h-full w-full"></img>
      </div>

      <div className="flex gap-1 items-center text-sm">
        <span>{post.rating.rate}</span>
        <AiFillStar />
      </div>

      <div className="flex flex-row items-center gap-16">
        <p className="text-md text-green-600 font-bold">${`${post.price}`}</p>
        {
          cart.some((p) => p.id === post.id) ?
            <button onClick={removefromcart}
              className="rounded-2xl p-2 uppercase border-gray-500 border text-xs font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Remove Item</button> :
            <button onClick={addtocart}
              className="rounded-2xl p-2 uppercase border-gray-500 border text-xs font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"> Add to cart</button>
        }
      </div>



    </div >);
};

export default Product;
