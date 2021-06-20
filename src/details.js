import React from "react";
import {apiCall} from './requests'

const Details = ({
  location: {
    state: { data },
  },
}) => {
 

  console.log({ data });

  const [stateData, setStateData] = React.useState(data)
  const [query, setquery] = React.useState('')


  

  const onsearch = () => {
    apiCall(query,(json) => setStateData(json), (e) => console.log({e}))
  }
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
    description,
  } = stateData;
  const menus = [
    {
      svg: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6",
      title: "Home",
    },
    {
      svg: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      title: "Explore",
    },
    {
      svg: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      title: "Notifications",
    },
    {
      svg: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Message",
    },
    {
      svg: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
      title: "Bookmarks",
    },
    {
      svg: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Lists",
    },
    {
      svg: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: "Profile",
    },
    {
      svg: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "More",
    },
  ];

  return (

    <div className="flex  w-full bg-gray-800  ">





      <div className="w-2/5 text-white h-12 pl-32 py-4 pt-10 mr-10 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Investing Guru
          </span>
        </div>

        <nav className="mt-5 px-2">
          {menus.map(menu => (
            <a

              className="group my-3 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full  hover:bg-blue-800 hover:text-blue-300 text-white">
              <svg
                className="mr-4 h-6 w-6 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={menu.svg}
                />
              </svg>
              {menu.title}
            </a>
          ))}

          <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
           Button
          </button>
        </nav>
      </div>

      <div className="">
        <nav className="flex items-center justify-between flex-wrap w-full bg-gray-800 p-6 z-10">
          {/* dropdown */}
          <div className="flex items-center flex-shrink-0 text-white mr-10 ">
          <div className=" flex flex-col justify-center ">
          <div className="flex items-center justify-center ">
          <div className=" relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
          <button
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-gray-800 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span className="font-semibold text-xl tracking-tight  text-teal-200 hover:text-white">
                        Financials
                    </span>
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>

            </span>
            <div
                class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    
                    <div class="py-1">
                        <a href="javascript:void(0)" tabindex="0"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Balance Sheet</a>
                        <a href="javascript:void(0)" tabindex="1"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Cash Flowt</a>
                        
                        <a href="javascript:void(0)" tabindex="2"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Income Statement</a>
                    </div>
                   
                </div>
            </div>


            </div>





            </div>
            


            </div>
            
            
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
              </a>
            </div>
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
               onChange = {(ev) => setquery(ev.target.value)}
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search" />
                <button onClick = {() => onsearch()} type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg className="text-gray-600 h-4 w-4 fill-current"  width="512px" height="512px" viewBox="0 0 56.966 56.966">
                <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />

                </svg>




                </button>




            </div>


          </div>
        </nav>



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
              <p className="break-words">Market Capitalization</p>
              <p>:- {marketCapitalization}</p>
            </p>
          </div>

          <div className="flex flex-col  -mt-14 bg-gray-800 border-2 p-8 mb-3 border-gray-900">
            <p className=" font-bold p-1 z-10 text-white text-3xl">
              {name} / {ticker}
            </p>

            <p className="text-base bold p-2  z-10 text-white">{description}</p>
          </div>
          <div className="flex flex-row justify-around rounded-full p-4 mb-3 bg-gray-800 border-2 border-white">
            <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
              <p>Location</p>
              {country}
            </p>
            <a

              className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
              <p>Company Website</p>
              {weburl}
            </a>

            <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
              <p>Ipo</p>
              {ipo}
            </p>
            <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
              <p>Share Out Standing</p>
              {shareOutstanding}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-screen "></div>
    </div>
  );
};

export default Details;
