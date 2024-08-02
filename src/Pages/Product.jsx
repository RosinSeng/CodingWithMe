import React from "react";
import ProductCard from "../components/ProductCard";
import ProductCard1 from "../components/ProductCard1";
import ProductCard2 from "../components/ProductCard2";
import ProductCard3 from "../components/ProductCard3";
import ProductCard4 from "../components/ProductCard4";

const Product = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-bold text-black mb-14 text-center">
            This is Our New Product
          </h2>
          <h2 className="font-medium text-3xl ml-5 mb-3">Android</h2>
          <hr className="mb-5 border-t-2 "></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <ProductCard />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Iphone</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <ProductCard1 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Tablet</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <ProductCard2 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Ipad</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <ProductCard3 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Smart Watches</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <ProductCard4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
