import React, { Component } from 'react'
import styles from './List.css'

export class ListItem extends Component {

  onChange() {
    this.props.clickHandler(this.props.text);
  }

  render() {
    return (
      <div className="listItem">{this.props.transaction}</div>
    )
  }
}

export default class List extends Component {

  clickHandler() {
    this.props.clickHandler(this.props.text);
  }

  render() {
    return (
    <div className="list">
      <h1 className="listHeader">{this.props.header}</h1>
      {
        this.props.transactions.map(function(transaction) {
          return <ListItem transaction={transaction} />
        })
      }
    </div>
    )
  }
}