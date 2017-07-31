import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
      bank_id: 1,
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
    const { getBanks } = this.props.newTrnsActions
    const { toBack } = this.props.routeActions
    const { auth } = this.props
    auth ? getBanks() : toBack()
  }
  render() {
    const { banks } = this.props
    const { addTransaction } = this.props.newTrnsActions
    const { toBack, setRoute } = this.props.routeActions
    const options = []
    const bank_list = banks.list
    bank_list.forEach((key, index) => {
      options[index] = {}
      options[index].value = bank_list[index].name
      options[index].label = bank_list[index].name
      options[index].id = bank_list[index].id
    })
    const selected_bank_name = bank_list.length ? bank_list[ banks.index[this.state.bank_id]].name : null
	return (
    <div className="col_container">
      <h1 className="flex_item">Новая транзакция</h1>
        <div className="row_container margin_10">

          <Select className="input_bank"
            name="bank-field"
            value={selected_bank_name}
            options={options}
            onChange={::this.setBank}/>

          <input onChange={::this.setAmount} className="input_bank" placeholder="Сумма" value={this.state.amount} />
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
NewTransactions.propTypes = {
  banks: PropTypes.array.banks,
  transactions: PropTypes.array.transactions,
  auth: PropTypes.bool.auth
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
    newTrnsActions: bindActionCreators(newTrnsActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactions)
