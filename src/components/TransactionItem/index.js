// Write your code here
import './index.css'

const TransactionItem = props => {
  const {id, transactionTitle, transactionAmount, trType} = props.item
  const {deleteTransaction} = props
  const onClickDeleteBtn = () => {
    deleteTransaction(id)
  }
  return (
    <li className="history-row">
      <p className="history-item-title">{transactionTitle}</p>
      <p className="history-item-amount">Rs {transactionAmount}</p>
      <p className="history-item-type">
        {trType === 'INCOME' ? 'Income' : 'Expenses'}
      </p>
      <button
        className="delete-button"
        onClick={onClickDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
