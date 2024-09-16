import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";
// import { addToCart } from "../redux/cartSlicer";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/CartAction";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);
  const options = {
    size: "small",
    precision: 0.5,
    value: product.ratings,
    readOnly: true,
    isHalf: true,
  };
  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item added to cart successfully");
  };

  return (
    <Link to={`/product/${product._id}`}>
    <div className="relative w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 space-y-1">
        <div className="flex flex-col">
          <span className="bg-black text-white text-xs px-2 py-1">NEW</span>
          <span className="bg-green-500 text-white text-xs px-2 py-1 mt-1">
            -50%
          </span>
        </div>
      </div>

      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer">
        <FaHeart />
      </div>

      {/* Product Image */}
      <img
        src={product.images[0].url}
        alt="Loveseat Sofa"
        className="object-cover h-50 w-full mb-4"
      />

      {/* Add to Cart Button */}
      <button
        onClick={() => {
          addToCart(product._id, 1);
        }}
        className="bg-black text-white w-full py-2 rounded-md text-sm font-semibold mb-4"
      >
        Add to cart
      </button>

      {/* Product Rating */}
      <div className="flex items-center text-yellow-400 mb-2">
        <Rating {...options} />
      </div>

      {/* Product Name and Pricing */}
      <h3 className="text-gray-800 text-lg font-medium mb-1">{product.name}</h3>
      <div className="text-lg font-semibold text-gray-800 mb-1">
        {product.price}
      </div>
      <div className="text-sm text-gray-400 line-through">$400.00</div>
    </div>
    </Link>
  );
};

export default ProductCard;
