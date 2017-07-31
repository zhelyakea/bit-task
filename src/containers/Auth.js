import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataAction from '../actions/DataAction'
import * as actions from '../actions'
const { map, reduce } = Array.prototype

export class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: '',
      pass: '',
      error: false
    }
  }
  checkAuth(){
    const { getAuth } = this.props.dataAction
    if(this.state.login.length === 0 || this.state.pass.length === 0){
      this.setState({
        error: true
      })
    } else { getAuth(`login=${this.state.login}&pass=${this.state.pass}`) }
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
Auth.propTypes = {
  personal: PropTypes.object.isRequired
}
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
		actions: bindActionCreators(actions, dispatch),
    dataAction: bindActionCreators(dataAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
