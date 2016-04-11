import React, {Component} from 'react'
import {SquareButton, VerticalRectangularButton, HorizontalRectangularButton, Screen} from "./Components/Button"

var buttonNumberData = [
                        [{data:'CLEAR'}],
                        [{data:'1'}, {data:'2'}, {data: '3'}],
                        [{data:'4'}, {data:'5'}, {data: '6'}],
                        [{data:'7'}, {data:'8'}, {data: '9'}],
                        [{data:'.'}, {data:'0'}, {data: '.'}]
                       ]

var value = '';

class NumberRow extends Component {

  renderRow() {
    var that = this
    return (
      this.props.numbers.map(function(number, i) {
        if (number.data === 'CLEAR') {
          return <HorizontalRectangularButton clickHandler={that.props.clickHandler} key={i} text={number.data} />
        }
        else {
          return <SquareButton clickHandler={that.props.clickHandler} key={i} text={number.data} />
        }
      })
    )

  }

  render() {
    return (
      <div>
        {this.renderRow()}
      </div>
    )
  }
}

export default class Calculator extends Component {

  constructor() {
    super()
    this.state = {value: ''}
  }

  getScreenValue(value) {
    if (this.state.value !== value) {
      return this.setState({value})
    }
  }

  computeResult() {
    var value = this.state.value
    var numbers;
    if (value.indexOf('-') !== -1) {
      numbers = value.split('-')
      this.setState({value: Number(numbers[0]) - Number(numbers[1])})
    } else if (value.indexOf('+') !== -1) {
      numbers = value.split('+')
      this.setState({value: Number(numbers[0]) + Number(numbers[1])})
    } else value = 'Invalid Input'
  }

  clickHandler(value) {
    console.log('value', value);
    if (value === 'CLEAR') {
      this.setState({value: ''});
    } else if (value === '=') {
      this.computeResult()
    }
    else if ('1234567890+-'.indexOf(value) !== -1) {
      this.setState({value: this.state.value + value})
    }
  }

  render() {
    var that = this
    return (
      <div className="calculator">
        <Screen value={this.state.value} handleChange={this.getScreenValue.bind(this)}/>
          <div className={"wrap"}>
            {
              buttonNumberData.map(function(row,i) {
                return (
                  <div className={"shortRow"} key={i}>
                    <NumberRow clickHandler={that.clickHandler.bind(that)} numbers={row} />
                  </div>
                )
              })
            }
          </div>
          <div className={"wrap"}>
            <SquareButton text={"+"} clickHandler={this.clickHandler.bind(this)} />
            <SquareButton text={"-"} clickHandler={this.clickHandler.bind(this)} />
            <VerticalRectangularButton text={"="} clickHandler={this.clickHandler.bind(this)} />
          </div>
      </div>
    )
  }
}
