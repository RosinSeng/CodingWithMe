import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.soklyphone.com/storage/SAMSUNG/Phone/galaxy-z-fold-5-thom-browne-edition/profile-1694490060p0VQz.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Galaxy Z Fold 5 Thom Browne Edition</h3>
          <p className="text-gray-600 text-sm mb-4">Or $223.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$2,499.00 </span>
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
            src="https://www.soklyphone.com/storage/Huawei/Huawei-nova-12-i/green-1-1720172054Qwoh2.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-8">Huawei nova 12i</h3>
          <p className="text-gray-600 text-sm mb-4">Or $20.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$229.00 </span>
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
            src="https://www.soklyphone.com/storage/Huawei/Huawei-nova-12-s/blue-1720176827GVy3J.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-8">Huawei nova 12s</h3>
          <p className="text-gray-600 text-sm mb-4">Or $31.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$349.00 </span>
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
            src="https://www.soklyphone.com/storage/Honor/honor-200-5g/black-1-1720234616sMsrF.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-8">Honor 200 5G</h3>
          <p className="text-gray-600 text-sm mb-4">Or $33.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$369.00 </span>
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
            src="https://www.soklyphone.com/storage/Honor/honor-200-pro-5g/green-1-1720238038rhxYa.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Honor 200 Pro 5G</h3>
          <p className="text-gray-600 text-sm mb-4">Or $49.00/mo. for 12 mo.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$549.00</span>
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
