import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { getFinancials } from "../../requests";

export const IncomeStatement = () => {
  const history = useHistory();
  const { company } = useParams();
  const [data, setData] = useState(null);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState("annual");

  const onSearch = (company) => {
    history.push(`/income-statement/${company}`);
  };

  useEffect(() => {
    setLoading(true);
    getFinancials(
      company,
      "ic",
      period,
      (data) => {
        setData(data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  }, [company, period]);

  if (loading || !data) {
    return (
      <div className="flex flex-col w-full h-screen bg-gray-800 text-white items-center justify-center">
        

          <div className="w-full h-full fixed block top-0 left-0 bg-gray-800 opacity-75 z-50 ">
            <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" 
>
              <i className="fas fa-circle-notch fa-spin fa-5x"></i>
            </span>
          </div>
      </div>
        );
  }

        return (
        <div className={`flex flex-row h-screen w-screen bg-gray-800 text-white`}>
          <Sidebar ticker={company} onsearch={(company) => onSearch(company)} />
          <div className="flex flex-col p-4 m-4 rounded-3xl bg-gray-800 border-2 border-green-400">
            <div className="flex items-center flex-shrink-0 text-white pl-5 mt-10">
              <h1 className="m-5 text-2xl font-bold">
                Income Statement - {company}
              </h1>

              <div>
                <button
                  onClick={() => setPeriod("annual")}
                  className={`mr-4 p-4 border-2 rounded-lg border-green-400 ${period === "annual" ? "text-teal-200" : ""
                    }`}
                >
                  Annual
                </button>
                <button
                  onClick={() => setPeriod("quarterly")}
                  className={`p-4 border-2 rounded-lg border-green-400 ${period === "quarterly" ? "text-teal-200" : ""
                    }`}
                >
                  Quarter
                </button>
              </div>
            </div>

            <div
              style={{ maxHeight: "72vh" }}
              className="flex overflow-y-auto border-green-400 m-5 border-2 tracking-tighter"
            >
              <div className="sticky left-0">
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${hover === 0 ? " bg-gray-900" : ""
                    }`}
                >
                  ITEM
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 1 ? " bg-gray-900" : ""
                    }`}
                >
                  Cost Of Goods Sold
                </p>
                <p
                  className={`bg-gray-800 w-max p-4 border-b-2 border-r-2 border-green-400  ${hover === 2 ? " bg-gray-900" : ""
                    }`}
                >
                  Diluted Average Shares Outstanding
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 3 ? " bg-gray-900" : ""
                    }`}
                >
                  Diluted EPS
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 4 ? " bg-gray-900" : ""
                    }`}
                >
                  Ebit
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 5 ? " bg-gray-900" : ""
                    }`}
                >
                  Gross Income
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 6 ? " bg-gray-900" : ""
                    }`}
                >
                  Interest Income Expense
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 7 ? " bg-gray-900" : ""
                    }`}
                >
                  Net Income
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 8 ? " bg-gray-900" : ""
                    }`}
                >
                  Net Income After Taxes
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 9 ? " bg-gray-900" : ""
                    }`}
                >
                  Pretax Income
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 10 ? " bg-gray-900" : ""
                    }`}
                >
                  Provision for Income Taxes
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 11 ? " bg-gray-900" : ""
                    }`}
                >
                  Research Development
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 12 ? " bg-gray-900" : ""
                    }`}
                >
                  Revenue
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 13 ? " bg-gray-900" : ""
                    }`}
                >
                  Sga Expense
                </p>
                <p
                  className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400  ${hover === 14 ? " bg-gray-900" : ""
                    }`}
                >
                  Total Operating Expense
                </p>
                <p
                  className={`bg-gray-800 p-4 border-r-2 border-green-400  ${hover === 15 ? " bg-gray-900" : ""
                    }`}
                >
                  Total Other Income Expense Net
                </p>
              </div>
              <div className="flex" style={{ maxWidth: "49vw", maxHeight: "72vh" }}>
                {data.financials.map((financial, key) => (
                  <div className="text-center" key={key}>
                    <p
                      style={{ minWidth: "110px" }}
                      onMouseEnter={() => setHover(0)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 0 ? "bg-gray-900" : ""
                        }`}
                    >
                      {period === "annual" ? financial.year : financial.period}
                    </p>
                    <p
                      onMouseEnter={() => setHover(1)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 1 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.costOfGoodsSold || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(2)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 2 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.dilutedAverageSharesOutstanding || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(3)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 3 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.dilutedEPS.toFixed(2) || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(4)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 4 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.ebit || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(5)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 5 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.grossIncome || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(6)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 6 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.interestIncomeExpense || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(7)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 7 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.netIncome || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(8)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 8 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.netIncomeAfterTaxes || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(9)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 9 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.pretaxIncome || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(10)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 10 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.provisionforIncomeTaxes || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(11)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 11 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.researchDevelopment || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(12)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 12 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.revenue || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(13)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 13 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.sgaExpense || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(14)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-b-2 border-r-2 border-green-400 ${hover === 14 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.totalOperatingExpense || 0}
                    </p>
                    <p
                      onMouseEnter={() => setHover(15)}
                      onMouseLeave={() => setHover(null)}
                      className={`p-4 border-r-2 border-green-400 ${hover === 15 ? "bg-gray-900" : ""
                        }`}
                    >
                      {financial.totalOtherIncomeExpenseNet || 0}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        );
};
