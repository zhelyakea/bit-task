import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteTransaction } from "../actions/TrnsActions";
import { getTransactionsData } from "../actions/NewTrnsActions";
import { toBack, setRoute } from "../actions/RouteActions";

import Transaction from "../components/Transaction";
import ColContainer from "../components/ColContainer";
import RowContainer from "../components/RowContainer";
import Header from "../components/Header";

export class Transactions extends Component {
  componentDidMount() {
    const { getTransactionsData, toBack, transactions, auth, banks } = this.props;
    switch (auth.state) {
      case true:
        getTransactionsData();
        break;
      default:
        toBack();
    }
  }
  render() {
    const { transactions, banks, deleteTransaction, toBack, setRoute } = this.props;

    const transaction_container = [];

    transactions.size
      ? transactions.forEach((value, key) => {
          let transaction = transactions.get(key);
          let id = transaction.id;
          let props = { key: id, banks, deleteTransaction, transaction };
          transaction_container.push(<Transaction {...props} />);
        })
      : null;
    const button_green = "button width_225 pressed green";

    return (
      <ColContainer>
        <Header text="Транзакции" />
        <ColContainer>
          <RowContainer style="">
            <p className="header">ID</p>
            <p className="header">Банк</p>
            <p className="header">Сумма</p>
            <p className="header">Действие</p>
          </RowContainer>
          {transaction_container}
        </ColContainer>
        <RowContainer style="margin_20">
          <button className={button_green} onClick={() => toBack()}>
            Выйти
          </button>
          <button
            className={button_green}
            onClick={() => setRoute("/newtransactions")}
          >
            Новая транзакция
          </button>
        </RowContainer>
      </ColContainer>
    );
  }
}
export default connect(
  ({ banks, transactions, auth }) => ({
    banks,
    transactions,
    auth
  }),
  {
    toBack,
    setRoute,
    deleteTransaction,
    getTransactionsData
  }
)(Transactions);
