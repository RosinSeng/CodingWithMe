import React from "react";
import iphone from "../assets/iphone-15-pro-max.jpg";
import Card from "../components/Card";
import Heroicons from "../components/Heroicons"; 
import ImagesGrid from "../components/ImagesGrid";
import ContactUs from "../components/ContactUs";


export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello Everyone
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to Potato Shop
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Shop Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={iphone} alt="" />
          </div>
        </div>
      </section>
      <h2 className="flex justify-center font-thin text-2xl lg:mt-10 lg:mb-10 cursor-pointer text-black">
        BEST SELLERS
      </h2>
      <hr className="m-5 h-2"></hr>
      <div className="flex">
        <Card />
      </div>
      <hr className="m-5 h-2"></hr>
      <div className="flex justify-center mt-16">
        <Heroicons />
      </div>
      <hr className="m-5 "></hr>
      <div className=" ">
        <ImagesGrid />
      </div>
      <hr className="m-5 h-2"></hr>
      <div>
        <ContactUs/>
      </div>
      <hr className="mt- "></hr>
    </main>
  );
}
