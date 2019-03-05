import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

class Homepage extends PureComponent {
  constructor(props) {
    super();
    this.outgo = React.createRef();
    this.income = React.createRef();
  }

  state = {
    balance: 0
  }

  componentDidMount () {
    axios.get(`http://localhost:8080/api/database/getBalance/${this.props.email}`)
      .then(res => {
        console.log(res);
        this.setState({
          balance: res.data.payload
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmit = () => {
    console.log(this.income.value);
    console.log(this.outcome.value);
    const value = this.income.value - this.outcome.value;
    axios.post('http://localhost:8080/api/account/changeData', {
        email: this.props.email,
        balance: this.state.balance + value
    })
      .then(res => {
        console.log(res);
        this.setState({
          balance: res.data.payload
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <div>
        <div
          className='container-fluid'
          style={{ height: '700px' }}
        >
          <h1>
              Текущий баланс: {this.props.isSignedIn ? this.state.balance : 0}
          </h1>
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Доход</ControlLabel>
            <FormControl
              autoFocus
              type='number'
              inputRef={input => this.income = input}
              style={{width: '300px', margin: 'auto'}}
              disabled={!this.props.isSignedIn}
            />
            <ControlLabel>Расход</ControlLabel>
            <FormControl
              autoFocus
              type='number'
              inputRef={input => this.outcome = input}
              style={{width: '300px', margin: 'auto'}}
              disabled={!this.props.isSignedIn}
            />
          </FormGroup>
          <Button
            outline color='default'
            disabled={!this.props.isSignedIn}
            onClick={this.props.isSignedIn && this.onSubmit}
          >
            Подтвердить
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.actions.path,
    showSidebar: state.actions.showSidebar,
    isSignedIn: state.actions.isSignedIn,
    email: state.actions.email.email
  };
};

export default connect(mapStateToProps)(Homepage);
