import React, { Component } from 'react'
import Calculator from './Calculator.js'
import History from './History'
import * as _ from 'lodash'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  updateTransactions(transaction) {
    if (transaction.length) {
      this.setState(this.addTransaction(transaction))
    }
  }

  addTransaction(transaction) {
    var newState = _.clone(this.state)
    var stateTrans = newState.transactions
    if (stateTrans.length >= 5) {
      stateTrans.pop()
      stateTrans.unshift(transaction)
    } else {
      stateTrans.unshift(transaction)
    }

    return newState
  }

  render() {
    return (
      <div className="container">
        <History transactions={this.state.transactions} />
        <Calculator onChange={this.updateTransactions.bind(this)} />
      </div>
    )
  }
}