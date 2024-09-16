import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard.jsx";
import { clearErrors, getProduct } from "../../actions/ProductAction.js";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layout/Loading/Loading.jsx";
import { useAlert } from "react-alert";
import Benefits from "./Benefits.jsx";
import Category from "./Category.jsx";
import NewArrivals from "./NewArrivals.jsx";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    // eslint-disable-next-line
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Category/>
          <Benefits/>
          <NewArrivals/>
        </>
      )}
    </>
  );
};

export default Home;
