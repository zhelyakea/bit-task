import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getBanks } from "../actions/BanksActions";
import { addTransaction } from "../actions/NewTrnsActions";
import { toBack, setRoute } from "../actions/RouteActions";

import Transaction from "../components/Transaction";
import ColContainer from "../components/ColContainer";
import RowContainer from "../components/RowContainer";

import Select from "react-select";
import "!style-loader!css-loader!react-select/dist/react-select.css";

export class NewTransactions extends Component {
  state = {
    bank_id: "1",
    amount: ""
  };
  setBank = arg => {
    this.setState({
      bank_id: arg.id
    });
  };
  setAmount = event => {
    this.setState({
      amount: event.target.value
    });
  };
  addTrns = () => {
    const { addTransaction } = this.props;
    const transactionToSave = {
      id: `${this.props.transactions.size + 15}`,
      bankId: this.state.bank_id,
      amount: this.state.amount
    };
    addTransaction(transactionToSave);
    this.setState({
      amount: ""
    });
  };
  componentDidMount() {
    const { getBanks, toBack, auth } = this.props;
    auth.state ? getBanks() : toBack();
  }
  render() {
    const { banks, addTransaction, toBack, setRoute } = this.props;

    const options = [];
    banks.forEach((value, key) => {
      let name = value.name;
      let id = value.id;
      options.push({ value: name, label: name, id });
    });

    const selected_bank_name =
      banks.size > 0 ? banks.get(this.state.bank_id).name : null;

    const button_green = "button width_225 pressed green";
    return (
      <ColContainer>
        <h1 className="flex_item">Новая транзакция</h1>
        <RowContainer style="margin_10">
          <Select
            className="input_bank"
            name="bank-field"
            value={selected_bank_name}
            options={options}
            clearable={false}
            onChange={this.setBank}
          />

          <input
            className="input_bank"
            placeholder="Сумма"
            value={this.state.amount}
            onChange={this.setAmount}
          />

          <button className="button_bank pressed green" onClick={this.addTrns}>
            Добавить
          </button>
        </RowContainer>

        <RowContainer style="margin_20">
          <button className={button_green} onClick={() => toBack()}>
            Выйти
          </button>
          <button
            className={button_green}
            onClick={() => setRoute("/transactions")}
          >
            К списку транзакций
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
    getBanks,
    addTransaction,
    toBack,
    setRoute
  }
)(NewTransactions);
