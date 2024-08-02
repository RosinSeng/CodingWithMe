import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-80  "
            src="https://www.soklyphone.com/storage/Accessories/COteci/Adapter/35W-Dual-Set/1-1718347987BBW7K.png"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-9">
            COTEetCI 35W Dual USB-C Port Power Adapter Set (CN)
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$22.00 </span>
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
            src="https://www.soklyphone.com/storage/Accessories/WiWU/WiWU-Wi-QC016-Geek-90W/1-1712741306xQW6v.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
            WiWU Wi-QC016 Geek 90W PD+QC Krisite Mul Ti-Port Fast Car Charger
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$15.00</span>
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
            src="https://www.soklyphone.com/storage/Accessories/Huawei/Huawei-Adapter-22-5-SE/1-1703316772s73EJ.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-9">
            Huawei Super Fast Charger (Max 22.5W SE)
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$29.00 </span>
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
            src="https://www.soklyphone.com/storage/Accessories/Huawei/huawei-original-adapter-18-w-type-c-cable/untitled-1-1634787059mo5vy.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-9">
            Huawei Original Adapter 18W Type-C Cable
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$15.00 </span>
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
            src="https://www.soklyphone.com/storage/Accessories/Apple/Adapter/240-w-usb-c-charge-cable-2-m/1-1701939242scGm6.png"
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-9">
            240W USB-C Charge Cable (2 m)
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$39.00</span>
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
