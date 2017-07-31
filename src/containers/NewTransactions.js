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
    const { addTransaction } = this.props.dataAction
    const transactionToSave = {
      id: mathRandom(1, 50),
      bankId: this.state.bank_id,
      amount: this.state.amount
    }
    addTransaction(transactionToSave)
  }
  render() {
    const { banks } = this.props
    const { toBack, addTransaction, toListTransaction } = this.props.dataAction
    const options = []
    banks.forEach((key, index) => {
      options[index] = {}
      options[index].value = banks[index].name
      options[index].label = banks[index].name
      options[index].id = banks[index].id
    })
    const selected_bank_name = banks.length ? banks.filter((key, index) => banks[index].id === this.state.bank_id)[0].name : null
	return (
    <div className="col_container">
      <h1 className="flex_item">Новая транзакция</h1>
        <div className="row_container margin_10">

          <Select className="input_bank"
            name="bank-field"
            value={selected_bank_name}
            options={options}
            onChange={::this.setBank}/>

          <input onChange={::this.setAmount} className="input_bank" placeholder="Сумма" />
          <button className="button_bank pressed green" onClick={::this.addTrns}>Добавить</button>
        </div>
        <div className="row_container margin_20">
          <button className="button width_225 pressed green" onClick={() => toBack()}>Выйти</button>
          <button className="button width_225 pressed green" onClick={() => toListTransaction()}>К списку транзакций</button>
        </div>
    </div>
    )
  }
}
NewTransactions.propTypes = {
  banks: PropTypes.array.banks,
  transactions: PropTypes.array.transactions,
}
function mapStateToProps (state) {
  return {
    banks: state.banks,
    transactions: state.transactions,
  }
}
function mapDispatchToProps(dispatch) {
  return {
		actions: bindActionCreators(actions, dispatch),
    dataAction: bindActionCreators(dataAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactions)
