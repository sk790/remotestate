import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../Cart/Payment";

const CheckOutRout = ({ stripe }) => {
  return (
    <Elements stripe={stripe}>
      <Payment />
    </Elements>
  );
};

export default CheckOutRout;
