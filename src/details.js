import React from "react";

const Details = ({
  location: {
    state: { data },
  },
}) => {
  const {
    country,
    currency,
    exchange,
    finnhubIndustry,
    ipo,
    logo,
    marketCapitalization,
    name,
    phone,
    shareOutstanding,
    ticker,
    weburl,
  } = data;

  console.log({ data });

  return (
    <div class="flex   w-full bg-gradient-to-r from-customBlue to-customDarkBlue ">
      <div className="w-1/4 h-screen "></div>
      <div>
        <div className="p-8 flex-col bg-white  flex justify-center items-center w-full h-80  bg-gradient-to-r from-green-400 to-blue-500  border-2 border-gray-900">
          <p className="text-9xl font-bold m-10 z-10 text-white">
            InvestingGuru
          </p>
        </div>
        <div className="flex justify-between  bg-white  p-6  border-2 ">
          <img
            class="rounded-full h-30 w-30 flex items-center justify-center  overflow-hidden p-2 transform -translate-y-24 bg-white  shadow-xl h-30 w-30"
            alt="company_logo"
            src={logo}
          />

          <p className="shadow-md rounded-md h-12 p-2 items-center flex justify-center font-semibold bg-green-500 text-green-100 text-xl">
            {marketCapitalization}
          </p>
        </div>

        <div className="flex flex-col  bg-white border-2 border-gray-900">
          <p className=" font-bold p-1 z-10 text-black text-3xl">
            {name} / {ticker}
          </p>

          <p className="text-base bold p-2  z-10 text-black">
            Founder of Sagar Bansal Group of Companies, Currently leading the
            Bansal X Board as the Chairman. Trying to create a legacy by
            revolutionizing the infosec edu.
          </p>
        </div>
        <div className="flex flex-row justify-around  bg-white border-2 border-gray-900">
          <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            {country}
          </p>
          <a
            href={weburl}
            className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            {weburl}
          </a>

          <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            {ipo}
          </p>
          <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            {shareOutstanding}
          </p>
        </div>
      </div>
      <div className="w-1/4 h-screen "></div>
    </div>
  );
};

export default Details;
