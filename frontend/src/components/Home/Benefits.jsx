import React from "react";

const Benefits = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between space-x-4 p-4">
        <div className="bg-gray-100 p-5 hover:-translate-y-1 transition-transform ease-in-out duration-300 w-1/5">
          <img
            src="./images/fast delivery.png"
            alt="Free Shipping"
            className="mb-4"
          />
          <h3 className="text-lg font-medium mb-1 text-left">Free Shipping</h3>
          <p className="text-gray-600 text-sm font-normal text-left">
            Order above $200
          </p>
        </div>

        <div className="bg-gray-100 p-5 hover:-translate-y-1 transition-transform ease-in-out duration-300 w-1/5">
          <img src="./images/money.png" alt="Money-back" className="mb-4" />
          <h3 className="text-lg font-medium mb-1 text-left">Money-back</h3>
          <p className="text-gray-600 text-sm font-normal text-left">
            30 days guarantee
          </p>
        </div>

        <div className="bg-gray-100 p-5 hover:-translate-y-1 transition-transform ease-in-out duration-300 w-1/5">
          <img
            src="./images/lock 01.png"
            alt="Secure Payments"
            className="mb-4"
          />
          <h3 className="text-lg font-medium mb-1 text-left">
            Secure Payments
          </h3>
          <p className="text-gray-600 text-sm font-normal text-left">
            Secured by Stripe
          </p>
        </div>

        <div className="bg-gray-100 p-5 hover:-translate-y-1 transition-transform ease-in-out duration-300 w-1/5">
          <img src="./images/call.png" alt="24/7 Support" className="mb-4" />
          <h3 className="text-lg font-medium mb-1 text-left">24/7 Support</h3>
          <p className="text-gray-600 text-sm font-normal text-left">
            Phone and Email support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
