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
    <div className="flex  w-full bg-gray-800 ">
      
      <div className="w-1/4 h-screen ">
        
        
        







      </div>
      
      <div className="grid mb-4 pt-6  pb-10 px-8 mx-4 rounded-3xl bg-gray-800 border-4 border-green-400">
        <div className="p-8 flex-col bg-gray-800  flex justify-center items-center w-full h-80  bg-gradient-to-r from-green-400 to-blue-500  border-2 border-gray-900">
          <p className="text-9xl font-bold m-10 z-10 text-white">
            InvestingGuru
          </p>
        </div>
        <div className="flex justify-between  bg-gray-800 p-3 h-10px  ">
          <img
            class="rounded-full h-30 w-30 flex items-center justify-center  overflow-hidden p-2 transform -translate-y-24 bg-white  shadow-xl h-30 w-30"
            alt="company_logo"
            src={logo}
          />

          <p className="shadow-md rounded-md h-12 p-2 items-center flex justify-center font-semibold bg-green-500 text-green-100 text-xl">
            <p className="break-words">
            Market Capitalization
           
            </p>
            <p>
              :- {marketCapitalization}
            </p>
            
          </p>
        </div>

        <div className="flex flex-col rounded-full -mt-14 bg-gray-800 border-2 p-6 mb-3 border-gray-900">
          <p className=" font-bold p-1 z-10 text-white text-3xl">
            {name} / {ticker}
          </p>

          <p className="text-base bold p-2  z-10 text-white">
            Founder of Sagar Bansal Group of Companies, Currently leading the
            Bansal X Board as the Chairman. Trying to create a legacy by
            revolutionizing the infosec edu.
          </p>
        </div>
        <div className="flex flex-row justify-around rounded-full p-4 mb-3 bg-gray-800 border-2 border-gray-900">
          <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
            <p>
              Location
            </p>
            {country}
          </p>
          <a
            href={weburl}
            className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
              <p>
                Company Website
              </p>
            {weburl}
          </a>

          <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
             <p>
               Ipo
             </p>
             {ipo}
          </p>
          <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
            <p>
              Share Out Standing
            </p>
            {shareOutstanding}
          </p>
        </div>
      </div>
      <div className="w-1/4 h-screen "></div>
    </div>
  );
};

export default Details;
