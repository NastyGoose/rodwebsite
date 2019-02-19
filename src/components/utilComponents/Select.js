import React, { Component } from 'react'
import {Button} from 'reactstrap';

export default class ControlledInput extends Component {
   getOptions = () => {
    const {options} = this.props;

    return options.map((item) => (
      <option value={item}>{item}</option>
    ));
  }

  render() {
    const {label, value, name, changeHandler} = this.props;

    return (
      <form>
        <div className='form-group'>
          <label>{label}</label>
          <select
            className='form-control' 
            value={value}
            name={name}
            onChange={changeHandler}
          >
           {this.getOptions()}
          </select>
        </div>
      </form>
    );
  }
}
