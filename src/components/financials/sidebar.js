import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ ticker, onsearch }) => {
  const location = useLocation();
  const [query, setquery] = useState("");

  const onSearch = () => {
    if (query.length > 0) onsearch(query);
  };

  return (
    <div className="text-white p-4 pt-14">
      <div className="flex items-center text-white mb-5">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Investing Guru
        </span>
      </div>

      <form onSubmit={onSearch} className="pt-2 relative mx-auto text-gray-600">
        <input
          onChange={(ev) => setquery(ev.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-5 top-5">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            width="512px"
            height="512px"
            viewBox="0 0 56.966 56.966"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>

      <nav className="mt-5 px-2">
        <div className="text-white mr-10">
          <Link
            to={`/details/${ticker}`}
            className="text-xl font-semibold hover:text-white"
          >
            <div className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
              </svg>
              <p className="ml-2">Back</p>
            </div>
          </Link>
          <div
            className={`p-2 ${
              location.pathname.includes("balance-sheet")
                ? "text-gray-200"
                : "text-teal-200"
            }`}
          >
            <Link
              to={`/balance-sheet/${ticker}`}
              className="px-4 py-2 text-xl font-semibold px-2 hover:text-white"
            >
              Balance Sheet
            </Link>
          </div>
          <div
            className={`p-2 ${
              location.pathname.includes("cash-flow")
                ? "text-gray-200"
                : "text-teal-200"
            }`}
          >
            <Link
              to={`/cash-flow/${ticker}`}
              className="px-4 py-2 text-xl font-semibold px-2 hover:text-white"
            >
              CashFlow
            </Link>
          </div>
          <div
            className={`p-2 ${
              location.pathname.includes("income-statement")
                ? "text-gray-200"
                : "text-teal-200"
            }`}
          >
            <Link
              to={`/income-statement/${ticker}`}
              className="px-4 py-2 text-xl font-semibold px-2 hover:text-white"
            >
              Income Statement
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
