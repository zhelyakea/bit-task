import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAuth } from "../actions/AuthActions";

import ColContainer from "../components/ColContainer";
import Header from "../components/Header";

export class Auth extends Component {
  state = {
    login: this.props.auth.login,
    pass: this.props.auth.pass,
    error: false
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      login: nextProps.auth.login,
      pass: nextProps.auth.pass
    });
  }
  checkAuth = () => {
    const { getAuth } = this.props;
    if (this.state.login.length === 0 || this.state.pass.length === 0) {
      this.setState({
        error: true
      });
    } else {
      getAuth(this.state.login, this.state.pass);
    }
  };
  inputLogin = event => {
    this.setState({
      login: event.target.value,
      error: false
    });
  };
  inputPass = event => {
    this.setState({
      pass: event.target.value,
      error: false
    });
  };
  loginByKeyPress = event => {
    if (event.key === "Enter") {
      this.checkAuth();
    }
  };
  render() {
    const input_class = this.state.error
      ? "flex_item input_auth border_red"
      : "flex_item input_auth";
    return (
      <ColContainer>
        <Header text="Авторизация" />
        <input
          value={this.state.login}
          onChange={this.inputLogin}
          onKeyPress={this.loginByKeyPress}
          className={input_class}
          placeholder="Login"
        />
        <input
          type="password"
          value={this.state.pass}
          onChange={this.inputPass}
          onKeyPress={this.loginByKeyPress}
          className={input_class}
          placeholder="Password"
        />
        <button
          className={`button width_200 pressed green margin_20`}
          onClick={this.checkAuth}
        >
          Войти
        </button>
      </ColContainer>
    );
  }
}
export default connect(({ auth }) => ({ auth }), { getAuth })(Auth);
