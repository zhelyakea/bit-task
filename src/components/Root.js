import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Root extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
      {children}
      </div>
    )
  }
}
