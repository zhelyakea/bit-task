import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import Auth from "./containers/Auth";
import Transactions from "./containers/Transactions";
import NewTransactions from "./containers/NewTransactions";
import Root from "./components/Root";

const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={Auth} />
        <Route path="transactions" component={Transactions} />
        <Route path="newtransactions" component={NewTransactions} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
