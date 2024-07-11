import React from "react";

const Card = () => {
  return (
    <>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.istudiosg.com/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__GBEN_e78496c1-7389-40e7-8dda-a5e47a593236.jpg?v=1711119395"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-600 text-sm mb-4">Or $110.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$1,229.00</span>
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
            src="https://www.istudiosg.com/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__GBEN_65990e9f-2e66-43c8-9b19-8e6ff69c1f4e.jpg?v=1711119224&width=823"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Iphone 15 Pro</h3>
          <p className="text-gray-600 text-sm mb-4">Or $93.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$1,039.00</span>
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
            src="https://www.istudiosg.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_76a44f60-9b64-4628-b3f4-eb5e4fa77618.jpg?v=1711114272&width=823"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">AirPods Pro (2nd generation)</h3>
          <p className="text-gray-600 text-sm mb-4">Or $20.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$229.00 </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="lg:max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 "
            src="https://www.istudiosg.com/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__GBEN_014496c6-dba9-4984-ad21-f7ff78c641c2.jpg?v=1711118978&width=823"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Iphone 15</h3>
          <p className="text-gray-600 text-sm mb-4">Or $70.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$779.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
