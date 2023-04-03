import React, { Component } from "react";
import './App.css';

class Button extends Component {
  constructor() {
    super()
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
    this.state = {
      numeroDeClicks1: 0,
      numeroDeClicks2: 0,
      numeroDeClicks3: 0,
      numeroDeClicks4: 0,
    }
  }
  click1() {
    this.setState((previousNumber, _props) => ({
      numeroDeClicks1: previousNumber.numeroDeClicks1 + 1
    }))
  }
  click2() {
    this.setState((previousNumber, _props) => ({
      numeroDeClicks2: previousNumber.numeroDeClicks2 + 1
    }))
  }
  click3() {
    this.setState((previousNumber, _props) => ({
      numeroDeClicks3: previousNumber.numeroDeClicks3 + 1
    }))
  }
  click4() {
    this.setState((previousNumber, _props) => ({
      numeroDeClicks4: previousNumber.numeroDeClicks4 + 1
    }))
  }
  render() {
    const { numeroDeClicks1, numeroDeClicks2, numeroDeClicks3, numeroDeClicks4 } = this.state;
    return (
      <div className="main">
        <h1>Utilizando estados e eventos</h1>
        <h4>Clique no botão para ver!</h4>
        <div>
          <button onClick={this.click1}>{numeroDeClicks1}</button>
          <button onClick={this.click2}>{numeroDeClicks2}</button>
          <button onClick={this.click3}>{numeroDeClicks3}</button>
          <button onClick={this.click4}>{numeroDeClicks4}</button>
        </div>
      </div>
    )
  }
}

export default Button