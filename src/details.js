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
    description,
  } = data;

  console.log({ data });
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
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 text-white"
          fill="currentColor">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>

        <nav className="mt-5 px-2">
          {menus.map(menu => (
            <a
              href="#"
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
            Tweet
          </button>
        </nav>
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
            <p className="break-words">Market Capitalization</p>
            <p>:- {marketCapitalization}</p>
          </p>
        </div>

        <div className="flex flex-col rounded-full -mt-14 bg-gray-800 border-2 p-6 mb-3 border-gray-900">
          <p className=" font-bold p-1 z-10 text-white text-3xl">
            {name} / {ticker}
          </p>

          <p className="text-base bold p-2  z-10 text-white">{description}</p>
        </div>
        <div className="flex flex-row justify-around rounded-full p-4 mb-3 bg-gray-800 border-2 border-gray-900">
          <p className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
            <p>Location</p>
            {country}
          </p>
          <a
            href={weburl}
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
      <div className="w-1/4 h-screen "></div>
    </div>
  );
};

export default Details;
