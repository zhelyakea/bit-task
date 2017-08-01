import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as banksActions from '../actions/BanksActions'
import * as newTrnsActions from '../actions/NewTrnsActions'
import * as routeActions from '../actions/RouteActions'

import {mathRandom} from '../services/mathrandom'

import Transaction from '../components/Transaction'
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

export class NewTransactions extends Component {
  constructor(props){
    super(props)
    this.state = {
      bank_id: '1',
      amount: ''
    }
  }
  setBank(arg) {
    this.setState({
      bank_id: arg.id
    })
  }
  setAmount(event) {
    this.setState({
      amount: event.target.value
    })
  }
  addTrns(){
    const { addTransaction } = this.props.newTrnsActions
    const transactionToSave = {
      id: mathRandom(1, 50),
      bankId: this.state.bank_id,
      amount: this.state.amount
    }
    addTransaction(transactionToSave)
    this.setState({
      amount: ''
    })
  }
  componentDidMount(){
    const { getBanks } = this.props.banksActions
    const { toBack } = this.props.routeActions
    const { auth } = this.props
    auth.state ? getBanks() : toBack()
  }
  render() {
    const { banks } = this.props
    const { addTransaction } = this.props.newTrnsActions
    const { toBack, setRoute } = this.props.routeActions
    const options = []
    const banks_keys = Object.keys(banks)
    banks_keys.forEach((key, index) => {
      options[index] = {}
      options[index].value = banks[key].name
      options[index].label = banks[key].name
      options[index].id = key
    })
    const selected_bank_name = banks_keys.length ? banks[this.state.bank_id].name : null

	return (
    <div className="col_container">
      <h1 className="flex_item">Новая транзакция</h1>
        <div className="row_container margin_10">

          <Select className="input_bank"
            name="bank-field"
            value={selected_bank_name}
            options={options}
            clearable = {false}
            onChange={::this.setBank}/>

          <input
          className="input_bank" placeholder="Сумма"
          value={this.state.amount}
          onChange={::this.setAmount} />
          <button className="button_bank pressed green" onClick={::this.addTrns}>Добавить</button>
        </div>
        <div className="row_container margin_20">
          <button className="button width_225 pressed green" onClick={() => toBack()}>Выйти</button>
          <button className="button width_225 pressed green" onClick={() => setRoute('/transactions')}>К списку транзакций</button>
        </div>
    </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    banks: state.banks,
    transactions: state.transactions,
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch) {
  return {
    banksActions: bindActionCreators(banksActions, dispatch),
    newTrnsActions: bindActionCreators(newTrnsActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactions)
