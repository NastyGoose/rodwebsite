import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { setUser } from '../../actions/sidebarStateAction';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    axios.post('http://localhost:8080/api/account/signin', {
      login: email,
      password,
      email
    })
    .then(res => {
      console.log(res);
      if (res.data.success) {
        alert('Успех!');
        this.props.setUser({
          login: email,
          email,
          password
        })
        this.props.history.push('/');
        } else {
        alert('Хуйня какая то миша давай по новой');
      }
    })
    .catch(err => {
      console.log(err);
      alert('При регистрации произошла ошибка.');
    })

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.actions.path,
    showSidebar: state.actions.showSidebar,
    isSignedIn: state.actions.isSignedIn
  };
}

export default connect(mapStateToProps, { setUser })(withRouter(Login));
