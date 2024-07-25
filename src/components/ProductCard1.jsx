import React from "react";

const ProductCard1 = () => {
  return (
    <>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 mb-5 "
            src="https://www.soklyphone.com/storage/Apple/iphone/iPhone-11/black-1623812685tjBes.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
          iPhone 11
          </h3>
          <p className="text-gray-600 text-sm mb-4">Or $37.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$410.00  </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 mb-5 "
            src="https://www.soklyphone.com/storage/Apple/iphone/iphone-12/Profile/purple-new-162380902553cNU.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
          iPhone 12
          </h3>
          <p className="text-gray-600 text-sm mb-4">Or $42.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$474.00 </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80 mb-5 "
            src="https://www.soklyphone.com/storage/Apple/iphone/iPhone-13/black-1635405788oup3j.jpg"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
          iPhone 13
          </h3>
          <p className="text-gray-600 text-sm mb-4">Or $53.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$589.00 </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-64 mb-4 "
            src="https://www.soklyphone.com/storage/Apple/iphone/iPhone-14/14-plus/black-16672925389UHfA.jpg"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
          iPhone 14
          </h3>
          <p className="text-gray-600 text-sm mb-4">Or $60.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$674.00</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-64 mb-4 "
            src="https://www.soklyphone.com/storage/Apple/iphone/iPhone-14/14-plus/yellow-1679282880RByoj.jpg"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
          iPhone 14 Plus
          </h3>
          <p className="text-gray-600 text-sm mb-4">Or $66.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$744.00 </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard1;
