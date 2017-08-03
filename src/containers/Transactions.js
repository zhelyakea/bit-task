import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as trnsActions from '../actions/TrnsActions'
import * as newTrnsActions from '../actions/NewTrnsActions'
import * as routeActions from '../actions/RouteActions'

import {mathRandom} from '../services/mathrandom'

import Transaction from '../components/Transaction'
import ColContainer from '../components/ColContainer'
import RowContainer from '../components/RowContainer'
import Header from '../components/Header'

import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

export class Transactions extends Component {
  componentDidMount(){
    const { getTransactionsData } = this.props.newTrnsActions
    const { toBack } = this.props.routeActions
    const { transactions, auth, banks } = this.props
    switch(auth.state){
      case true:
        getTransactionsData()
        break
      default:
        toBack()
    }
  }
  render() {
    const { transactions, banks } = this.props
    const { deleteTransaction } = this.props.trnsActions
    const { toBack, setRoute } = this.props.routeActions

    const transaction_container =  []

    transactions.size ? transactions.forEach((value, key) => {
      let transaction = transactions.get(key)
      let id = transaction.id
      let props = {key: id, banks, deleteTransaction, transaction}
      transaction_container.push( <Transaction { ...props} /> )
    }) : null
    const button_green = "button width_225 pressed green"

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
          <button className={button_green} onClick={() => toBack()}>Выйти</button>
          <button className={button_green} onClick={() => setRoute('/newtransactions')} >Новая транзакция</button>
        </RowContainer>
      </ColContainer>
    )
  }
}
function mapStateToProps (state) {
  return {
    transactions: state.transactions,
    banks: state.banks,
    auth: state.auth,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    newTrnsActions: bindActionCreators(newTrnsActions, dispatch),
    trnsActions: bindActionCreators(trnsActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
