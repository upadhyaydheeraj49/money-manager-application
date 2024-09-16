import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionHistoryList: [],
    title: '',
    amount: '',
    transactionType: 'INCOME',
  }

  updateTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  updateAmount = event => {
    /*
    if (event.target.value !== '') {
      let v
      try {
        v = parseInt(event.target.value)
        this.setState({
          amount: v,
        })
      } catch (e) {
        console.log('hello')
      }
    }
    */
    this.setState({
      amount: event.target.value,
    })
  }

  updateTransactionType = event => {
    console.log(event.target.value)
    this.setState({
      transactionType: event.target.value,
    })
  }

  addTransaction = event => {
    event.preventDefault()
    this.setState(prevState => {
      const {title, amount, transactionType} = prevState
      const amt = amount === '' ? 0 : parseInt(amount)
      const newTransaction = {
        id: uuidv4(),
        transactionTitle: title,
        transactionAmount: amt,
        trType: transactionType,
      }
      console.log(newTransaction)
      return {
        transactionHistoryList: [
          ...prevState.transactionHistoryList,
          newTransaction,
        ],
        title: '',
        amount: '',
      }
    })
  }

  deleteTransaction = transactionId => {
    this.setState(prevState => {
      const {transactionHistoryList} = prevState
      const filteredList = transactionHistoryList.filter(
        item => item.id !== transactionId,
      )
      return {
        transactionHistoryList: filteredList,
      }
    })
  }

  render() {
    const {transactionHistoryList, title, amount, transactionType} = this.state
    let incomeAmount = 0
    let expensesAmount = 0
    transactionHistoryList.forEach(item => {
      const {transactionAmount, trType} = item
      if (trType === 'INCOME') {
        incomeAmount += transactionAmount
      } else {
        expensesAmount += transactionAmount
      }
    })
    return (
      <div className="main-container">
        <div className="top-profile-container">
          <h1>Hi, Richard</h1>
          <p className="profile-description">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-history-container">
          <form className="transaction-form" onSubmit={this.addTransaction}>
            <h1>Add Transaction</h1>
            <label htmlFor="titleInputEl">TITLE</label>
            <input
              type="text"
              id="titleInputEl"
              placeholder="TITLE"
              value={title}
              onChange={this.updateTitle}
            />
            <label htmlFor="amountInputEl">AMOUNT</label>
            <input
              type="number"
              id="amountInputEl"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.updateAmount}
            />
            <label htmlFor="typeSelectEl">TYPE</label>
            <select
              id="typeSelectEl"
              value={transactionType}
              onChange={this.updateTransactionType}
            >
              {transactionTypeOptions.map(item => {
                const {optionId, displayText} = item
                return (
                  <option key={optionId} value={optionId}>
                    {displayText}
                  </option>
                )
              })}
            </select>
            <button type="submit">Add</button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul>
              <li className="header-row history-row">
                <p className="history-title">Title</p>
                <p className="history-amount">Amount</p>
                <p className="history-type">Type</p>
              </li>
              {transactionHistoryList.map(item => (
                <TransactionItem
                  key={item.id}
                  item={item}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
