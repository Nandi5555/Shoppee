import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => (state));


  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart")
  }

  return (
    <div className={theme ? " bg-white w-full md:w-11/12 mb-5 pb-4 rounded-lg pt-2" : "w-full md:w-11/12 mb-5 pb-4 pt-2"}>
      <div className="flex flex-col pr-6 md:pr-0 md:flex-row space-x-16 items-center justify-center">
        <div className="max-h-30 min-h-8 w-1/4">
          <img className="h-full" src={item.image} alt="item" />
        </div>
        <div className="flex flex-col md:w-1/2 mt-4">
          <h1 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h1>
          <p className="text-sm text-gray-600">{item.description.substr(0, 180)}...</p>
          <div className="flex flex-row justify-between mt-5 items-center">
            <p className="text-md text-green-600 font-bold">$ {item.price}</p>
            <div className=" cursor-pointer border rounded-full p-2 bg-red-300 hover:text-white hover:bg-red-500
          transition duration-300 ease-in-out">
              <MdDelete className=" text-lg" onClick={removefromcart} />
            </div>
          </div>
        </div>
      </div>

    </div>);
};

export default CartItem;
