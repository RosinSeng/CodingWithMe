import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.soklyphone.com/storage/Accessories/Apple/Bluetooth-Earphone/Air-Pods-Pro-2nd/1-1696925372pt9Py.png"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            New
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-8">
            AirPods Pro (2nd Generation) USB‑C
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$229.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 mb-3"
            src="https://www.soklyphone.com/storage/Accessories/Apple/Bluetooth-Earphone/AirPods-3rd-generation/hero-airpods-3gen-er2vzgadkpiu-large-1638258794wMQyb.jpg"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            New
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-14">
            AirPods (3rd Generation)
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$159.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 mb-4 "
            src="https://www.soklyphone.com/storage/Accessories/Apple/Bluetooth-Earphone/AirPods-2-Charging-Case/profile-1-1622706047wk6fe-16237245130wkQs.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-8">
            AirPods 2 With Charging Case
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$115.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.soklyphone.com/storage/SAMSUNG/Bluetooth-Earphones/Galaxy-Buds3/1-1720756855aJGNs.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            New
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-14">Galaxy Buds3</h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$179.00 </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.soklyphone.com/storage/Accessories/SONY/sony-wf-1000-xm-5-the-best-truly-wireless-noise-canceling-earbuds/silver1-1690343425XXM8U.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            New
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-7">
            Sony WF-1000XM5 The Best Wireless Noise Canceling
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$299.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
