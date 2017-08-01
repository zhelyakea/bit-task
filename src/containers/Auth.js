import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authActions from '../actions/AuthActions'

export class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: this.props.auth.login,
      pass: this.props.auth.pass,
      error: false
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      login: nextProps.auth.login,
      pass: nextProps.auth.pass
    })
  }
  checkAuth(){
    const { getAuth } = this.props.authActions
    if(this.state.login.length === 0 || this.state.pass.length === 0){
      this.setState({
        error: true
      })
    } else { getAuth(this.state.login, this.state.pass) }
  }
  inputLogin(event){
    this.setState({
      login: event.target.value,
      error: false
    })
  }
  inputPass(event){
    this.setState({
      pass: event.target.value,
      error: false
    })
  }
  loginByKeyPress(event){
    if (event.key === 'Enter') {
      this.checkAuth()
    }
  }
  render() {
    const input_class =  this.state.error ? 'border_red' : ''
		return (
      <div className="col_container">
        <h1 className="flex_item">Авторизация</h1>

        <input
          value={this.state.login}
          onChange={::this.inputLogin}
          onKeyPress={::this.loginByKeyPress}
          className={`flex_item input_auth ${input_class}`}
          placeholder="Login" />

        <input
          type="password"
          value={this.state.pass}
          onChange={::this.inputPass}
          onKeyPress={::this.loginByKeyPress}
          className={`flex_item input_auth ${input_class}`}
          placeholder="Password" />

        <button
          className={`button width_200 pressed green margin_20`}
          onClick={::this.checkAuth}
        >Войти</button>
      </div>
      )
    }
}
function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
