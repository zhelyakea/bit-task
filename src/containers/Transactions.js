import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataAction from '../actions/DataAction'
import * as actions from '../actions'
const { map, reduce } = Array.prototype
import Transaction from '../components/Transaction'
import {mathRandom} from '../services/mathrandom'
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

export class Transactions extends Component {
  componentDidMount(){
    const { getBanks } = this.props.dataAction
    const { transactions } = this.props
    if(transactions.length === 0) getBanks()
  }
  render() {
    const { transactions, banks, editable } = this.props
    const { toBack, deleteTransaction, toNewTransactioins } = this.props.dataAction
    const transaction_container = transactions::map((key, index) =>
    <Transaction
      key={transactions[index].id}
      banks={banks}
      editable={editable}
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
          <button className="button width_225 pressed green" onClick={() => toNewTransactioins()} >Новая транзакция</button>
        </div>
    </div>
    )
  }
}
Transactions.propTypes = {
  banks: PropTypes.array.banks,
  transactions: PropTypes.array.transactions,
  editable: PropTypes.number.editable
}
function mapStateToProps (state) {
  return {
    transactions: state.transactions,
    banks: state.banks,
    editable: state.editable
  }
}
function mapDispatchToProps(dispatch) {
  return {
		actions: bindActionCreators(actions, dispatch),
    dataAction: bindActionCreators(dataAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
