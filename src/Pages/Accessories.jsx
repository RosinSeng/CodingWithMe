import React from "react";
import AccsCard from "../components/AccsCard";

const Accessories = () => {
  return <>
  <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-2">
      <h2 className="text-3xl font-bold text-black mb-14 text-center">
        This is Our New Accessories
      </h2>
      <h2 className="font-medium text-3xl ml-5 mb-3">Case</h2>
      <hr className="mb-5 border-t-2 "></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <AccsCard/>
      </div>
      <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Earphone</h2>
      <hr className="mb-5 border-t-2"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
      </div>
      <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Charger</h2>
      <hr className="mb-5 border-t-2"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
      </div>
      <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Screen Protector</h2>
      <hr className="mb-5 border-t-2"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
      </div>
      <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Power Bank</h2>
      <hr className="mb-5 border-t-2"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
      </div>
    </div>
  </div>
</>
};

export default Accessories;
