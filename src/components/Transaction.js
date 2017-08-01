import React, { PropTypes, Component } from 'react'

export default class Transaction extends Component {
  render() {
    const { transaction, banks, deleteTransaction } = this.props
    const amount = transaction.amount
    const trs_id = transaction.id
    const bank_id = transaction.bankId
    const bank_name = banks[bank_id].name
    return (
      <div className="row_container">
        <p className="field">{trs_id}</p>
        <p className="field">{bank_name}</p>
        <p className="field">{amount}</p>
        <button className="button_bank pressed red" onClick={() => deleteTransaction(transaction)}>Удалить</button>
      </div>
    )
  }
}
