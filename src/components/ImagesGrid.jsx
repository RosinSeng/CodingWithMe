import React from "react";

const ImagesGrid = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://www.ione.com.kh/wp-content/uploads/2023/09/1-10.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Iphone 15 Pro Max
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2ODFkcDVXTGRPYTNEZm9jVU1sTHdEQ1cwVWQwY3p4S1JSUW03bjhwbHZrKzJ5aFM4QSthSG1nSUl6WXJQME1SZ2tBTDJMc3ZHNFdqOHBBSGlpYVM2UVZpU3kyL0FKUlpaZ25KNUNrQi8rOWdRPT0=&traceId=1"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Iphone 15
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://www.apple.com/v/watch/bn/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Iwatch
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://www.bhphotovideo.com/images/images2500x2500/apple_mrx33ll_a_14_macbook_pro_with_1793624.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Macbook Pro
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
