import React from "react";
import AccsCard from "../components/AccsCard";
import AccsCard1 from "../components/AccsCard1";
import AccsCard2 from "../components/AccsCard2";
import AccsCard3 from "../components/AccsCard3";
import AccsCard4 from "../components/AccsCard4";

const Accessories = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-bold text-black mb-14 text-center">
            This is Our New Accessories
          </h2>
          <h2 className="font-medium text-3xl ml-5 mb-3">Case</h2>
          <hr className="mb-5 border-t-2 "></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <AccsCard />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Earphone</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <AccsCard1 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Charger</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <AccsCard2 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">
            Screen Protector
          </h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <AccsCard3 />
          </div>
          <h2 className="font-medium text-3xl ml-5 mt-5 mb-3">Power Bank</h2>
          <hr className="mb-5 border-t-2"></hr>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <AccsCard4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
