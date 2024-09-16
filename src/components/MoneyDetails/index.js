import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div className="money-details-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-details-card-text-container">
          <p className="card-title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {incomeAmount - expensesAmount}
          </p>
        </div>
      </div>
      <div className="money-details-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-details-card-text-container">
          <p className="card-title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-details-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-details-card-text-container">
          <p className="card-title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
