import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { getFinancials } from "../../requests";

export const BalanceSheet = () => {
  const { company } = useParams();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState("annual");

  const onSearch = (company) => {
    history.push(`/balance-sheet/${company}`);
  };

  useEffect(() => {
    setLoading(true);
    getFinancials(
      company,
      "bs",
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
      <Sidebar ticker={company} onsearch={onSearch} />
      <div className="flex flex-col p-5 m-5 rounded-3xl bg-gray-800 border-2 border-green-400">
        <div className="flex items-center flex-shrink-0 text-white pl-5 mt-10">
          <h1 className="m-5 text-2xl font-bold">Balance Sheet - {company}</h1>

          <div>
            <button
              onClick={() => setPeriod("annual")}
              className={`mr-4 p-4 border-2 rounded-lg border-green-400 ${
                period === "annual" ? "text-teal-200" : ""
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setPeriod("quarterly")}
              className={`p-4 border-2 rounded-lg border-green-400 ${
                period === "quarterly" ? "text-teal-200" : ""
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
          <div className="sticky left-0 bg-gray-800">
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2  border-red-500 ${
                hover === 0 ? "bg-gray-900" : ""
              }`}
            >
              ITEM
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 1 ? "bg-gray-900" : ""
              }`}
            >
              Accounts Payable
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 2 ? "bg-gray-900" : ""
              }`}
            >
              Accounts Receivables
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 3 ? "bg-gray-900" : ""
              }`}
            >
              Accrued Liability
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 4 ? "bg-gray-900" : ""
              }`}
            >
              Accumulated Depreciation
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 5 ? "bg-gray-900" : ""
              }`}
            >
              Cash
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 6 ? "bg-gray-900" : ""
              }`}
            >
              Cash Equivalents
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 7 ? "bg-gray-900" : ""
              }`}
            >
              Cash Short Term Investments
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 8 ? "bg-gray-900" : ""
              }`}
            >
              Common Stock
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 9 ? "bg-gray-900" : ""
              }`}
            >
              Current Assets
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 10 ? "bg-gray-900" : ""
              }`}
            >
              Current Liabilities
            </p>
            <p
              className={`w-max bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 11 ? "bg-gray-900" : ""
              }`}
            >
              Current Portion Long Term Debt
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 12 ? "bg-gray-900" : ""
              }`}
            >
              Inventory
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 13 ? "bg-gray-900" : ""
              }`}
            >
              Liabilities Share holders Equity
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 14 ? "bg-gray-900" : ""
              }`}
            >
              Long Term Debt
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 15 ? "bg-gray-900" : ""
              }`}
            >
              Long Term Investments
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 16 ? "bg-gray-900" : ""
              }`}
            >
              Other Current Assets
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 17 ? "bg-gray-900" : ""
              }`}
            >
              Other Current liabilities
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 18 ? "bg-gray-900" : ""
              }`}
            >
              Other Equity
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 19 ? "bg-gray-900" : ""
              }`}
            >
              Other Liabilities
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 20 ? "bg-gray-900" : ""
              }`}
            >
              Other Long Term Assets
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 21 ? "bg-gray-900" : ""
              }`}
            >
              Other Receivables
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 22 ? "bg-gray-900" : ""
              }`}
            >
              Property Plant Equipment
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 23 ? "bg-gray-900" : ""
              }`}
            >
              Retained Earnings
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 24 ? "bg-gray-900" : ""
              }`}
            >
              Shares Outstanding
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 25 ? "bg-gray-900" : ""
              }`}
            >
              Short Term Debt
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 26 ? "bg-gray-900" : ""
              }`}
            >
              Short Term Investments
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 27 ? "bg-gray-900" : ""
              }`}
            >
              Tangible Book Value per Share
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 28 ? "bg-gray-900" : ""
              }`}
            >
              Total Assets
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 29 ? "bg-gray-900" : ""
              }`}
            >
              Total Debt
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 30 ? "bg-gray-900" : ""
              }`}
            >
              Total Equity
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 31 ? "bg-gray-900" : ""
              }`}
            >
              Total Liabilities
            </p>
            <p
              className={`bg-gray-800 p-4 border-b-2 border-r-2 border-green-400 ${
                hover === 32 ? "bg-gray-900" : ""
              }`}
            >
              Total Receivables
            </p>
            <p
              className={`bg-gray-800 p-4 border-r-2 border-green-400 ${
                hover === 33 ? "bg-gray-900" : ""
              }`}
            >
              Unrealized Profit Loss Security
            </p>
          </div>
          <div className="flex" style={{ maxWidth: "50vw", maxHeight: "72vh" }}>
            {data.financials.map((financial, key) => (
              <div className="text-center" key={key}>
                <p
                  onMouseEnter={() => setHover(0)}
                  onMouseLeave={() => setHover(null)}
                  style={{ minWidth: "110px" }}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 0 ? "bg-gray-900" : ""
                  }`}
                >
                  {period === "annual" ? financial.year : financial.period}
                </p>
                <p
                  onMouseEnter={() => setHover(1)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 1 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.accountsPayable || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(2)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 2 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.accountsReceivables || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(3)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 3 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.accruedLiability || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(4)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 4 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.accumulatedDepreciation || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(5)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 5 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.cash || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(6)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 6 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.cashEquivalents || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(7)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 7 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.cashShortTermInvestments || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(8)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 8 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.commonStock || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(9)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 9 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.currentAssets || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(10)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 10 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.currentLiabilities || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(11)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 11 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.currentPortionLongTermDebt || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(12)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 12 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.inventory || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(13)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 13 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.liabilitiesShareholdersEquity || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(14)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 14 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.longTermDebt || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(15)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 15 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.longTermInvestments || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(16)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 16 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherCurrentAssets || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(17)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 17 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherCurrentliabilities || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(18)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 18 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherEquity || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(19)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 19 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherLiabilities || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(20)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 20 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherLongTermAssets || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(21)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 21 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.otherReceivables || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(22)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 22 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.propertyPlantEquipment || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(23)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 23 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.retainedEarnings || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(24)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 24 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.sharesOutstanding || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(25)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 25 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.shortTermDebt || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(26)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 26 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.shortTermInvestments || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(27)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 27 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.tangibleBookValueperShare.toFixed(2) || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(28)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 28 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.totalAssets || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(29)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 29 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.totalDebt || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(30)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 30 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.totalEquity || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(31)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 31 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.totalLiabilities || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(32)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-b-2 border-r-2 border-green-400 ${
                    hover === 32 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.totalReceivables || 0}
                </p>
                <p
                  onMouseEnter={() => setHover(33)}
                  onMouseLeave={() => setHover(null)}
                  className={`p-4 border-r-2 border-green-400 ${
                    hover === 33 ? "bg-gray-900" : ""
                  }`}
                >
                  {financial.unrealizedProfitLossSecurity || 0}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
