import React, { PropTypes, Component } from 'react'

export default class Transaction extends Component {
  render() {
    const { transaction, banks, editable, deleteTransaction } = this.props
    const amount = transaction.amount
    const trs_id = transaction.id
    const bank_id = transaction.bankId
    const bank_name = banks.filter((key, index) => banks[index].id === bank_id)[0].name
    const button_delete = editable === trs_id ? <button className="button_bank pressed red" onClick={() => deleteTransaction(transaction)}>Удалить</button> : <p className="field"></p>
    return (
      <div className="row_container">
        <p className="field">{trs_id}</p>
        <p className="field">{bank_name}</p>
        <p className="field">{amount}</p>
        {button_delete}
      </div>
    )
  }
}
