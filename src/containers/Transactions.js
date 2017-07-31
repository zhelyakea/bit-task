import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as trnsActions from '../actions/TrnsActions'
import * as routeActions from '../actions/RouteActions'

import {mathRandom} from '../services/mathrandom'

import Transaction from '../components/Transaction'
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

export class Transactions extends Component {
  componentDidMount(){
    const { getTransactions } = this.props.trnsActions
    const { toBack } = this.props.routeActions
    const { transactions, auth } = this.props
    switch(auth){
      case true:
        getTransactions()
        break
      default:
        toBack()
    }
  }
  render() {
    const { transactions, banks } = this.props
    const { deleteTransaction } = this.props.trnsActions
    const { toBack, setRoute } = this.props.routeActions
    
    const transaction_container = transactions.map((key, index) =>
    <Transaction
      key={transactions[index].id}
      banks={banks}
      deleteTransaction={deleteTransaction}
      transaction={transactions[index]} />
    )
	return (
    <div className="col_container">
      <h1 className="flex_item">Транзакции</h1>
        <div className="col_container">
          <div className="row_container">
            <p className="header">ID</p>
            <p className="header">Банк</p>
            <p className="header">Сумма</p>
            <p className="header">Действие</p>
          </div>
          {transaction_container}
        </div>
        <div className="row_container margin_20">
          <button className="button width_225 pressed green" onClick={() => toBack()}>Выйти</button>
          <button className="button width_225 pressed green" onClick={() => setRoute('/newtransactions')} >Новая транзакция</button>
        </div>
    </div>
    )
  }
}
Transactions.propTypes = {
  banks: PropTypes.object.banks,
  transactions: PropTypes.array.transactions,
  auth: PropTypes.bool.auth,
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
    trnsActions: bindActionCreators(trnsActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
