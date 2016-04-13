import React, { Component, PropTypes } from 'react'
import styles from './Button.css'

export class SquareButton extends Component {

  clickHandler() {
      this.props.clickHandler(this.props.text);
  }

  render() {
    return (
      <button className='calculator-button square' onClick={this.clickHandler.bind(this)}>
        {this.props.text}
      </button>
    )
  }
}

export class HorizontalRectangularButton extends Component {

  clickHandler() {
    this.props.clickHandler(this.props.text);
  }

  render() {
    return (
      <button className='calculator-button horizontalRectangle' onClick={this.clickHandler.bind(this)}>
        {this.props.text}
      </button>
    )
  }
}

export class VerticalRectangularButton extends Component {

  clickHandler() {
    this.props.clickHandler(this.props.text);
  }

  render() {
    return (
      <button className='calculator-button verticalRectangle' onClick={this.clickHandler.bind(this)}>
        {this.props.text}
      </button>
    )
  }
}


export class Screen extends Component {

  handleChange(event) {
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <input className='screen' type="text" defaultValue={this.props.value} value={this.props.value} onChange={this.handleChange.bind(this)} />
    )
  }
}

export default {
  SquareButton: SquareButton,
  VerticalRectangularButton: VerticalRectangularButton,
  HorizontalRectangularButton: HorizontalRectangularButton,
  Screen: Screen
}