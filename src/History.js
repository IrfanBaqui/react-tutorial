import React, {Component} from 'react'
import List from './Components/List/List'


export default class History extends Component {
  render() {
    return (
      <List header="Recent Transactions" transactions={this.props.transactions} />
    )
  }
}
