import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import Details from "./details";
import { BalanceSheet } from "./components/financials/balanceSheet";
import { CashFlow } from "./components/financials/cashFlow";
import { IncomeStatement } from "./components/financials/incomeStatement";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/details/:company" exact component={Details} />
        <Route path="/" exact component={Home} />
        <Route path="/balance-sheet/:company" component={BalanceSheet} />
        <Route path="/income-statement/:company" component={IncomeStatement} />
        <Route path="/cash-flow/:company" component={CashFlow} />
      </Switch>
    </Router>
  );
};

export default Navigation;
