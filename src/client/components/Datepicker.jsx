import React, { Component } from 'react';

export default class Datepicker extends Component {
  state = {
    one: '1'
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      one: '2'
    })
  }

  render() {
    console.log(this.state)

    return <button onClick={this.handleClick.bind(this)}>kliknij mnie</button>
  }
}