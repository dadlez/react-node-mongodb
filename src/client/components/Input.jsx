import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'na start'
    };
  }

  render() {
    const label = this.props.label;
    const inputType = this.props.type;
    const placeholder = this.props.placeholder;
    console.log(this.state.value);

    return (
      <div>
        {inputType === 'email' &&
        <div className="form-group">
          <label htmlFor="email">{label}</label>
          <input type="email" className="form-control" id="email" placeholder="example@email.com" required />
        </div>}
        {inputType === 'text' && 
          <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input type="text" className="form-control" id="name" placeholder="Pan Kuleczka" required />
          </div>}
        {inputType === 'submit' && <button type='submit' className="btn btn-primary">Send</button>}
      </div>
    )
  }
}