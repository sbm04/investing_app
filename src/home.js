import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import bgimage from "./assets/p1.jpg";

const BASE_URL = "https://finnhub.io";
const token = "c34f7oqad3ie56g38rd0";

const Home = () => {
  const [query, setquery] = useState("");
  const [_, setdata] = useState(null);

  const history = useHistory();

  const apiCall = async () => {
    const result = await fetch(
      `${BASE_URL}/api/v1/stock/profile2?symbol=${query}&token=${token}`
    );
    const json = await result.json();
    setdata(json);
    history.push("/details");
    console.log({ json });
  };

  return (
    <div className="flex flex-col  w-full  ">
      <img src={bgimage} className="h-4/5 w-screen absolute" />
      <nav className="flex items-center justify-between flex-wrap w-full bg-teal-500 p-6 z-10">
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
            Sagar Bansal Studio
          </span>
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
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Download
            </a>
          </div>
        </div>
      </nav>

      <div className="p-8 flex-col  flex justify-center items-center">
        <p className="text-9xl font-bold m-10 z-10 text-white">Ubersuggest</p>

        <p className="text-xl bold m-10 z-10 text-white">
          Want more traffic? Ubersuggest shows you how to win the game of SEO.
          Just type in a domain or a keyword to get started
        </p>
        <div className="bg-orange-500 flex items-center w-1/2 p-2 rounded overflow-hidden  shadow-xl z-10">
          <input
            onChange={ev => setquery(ev.target.value)}
            className=" w-full py-4 px-7 bg-gray-100 text-gray-700 leading-tight focus:outline-none "
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="p-4">
            <button
              onClick={() => apiCall()}
              className="bg-white text-orange-400 z-10  p-5 font-semibold hover:bg-blue-400 focus:outline-none  h-12 flex items-center justify-center">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
