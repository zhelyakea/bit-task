import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './Global.css';

export default class Root extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.wh_100}>
      {children}
      </div>
    )
  }
}
