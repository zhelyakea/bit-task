import React, { Component } from 'react'

export default class RowContainer extends Component{
  render(){
    return(
      <div className={`row_container ${this.props.style}`}>
        {this.props.children}
      </div>
    )
  }
}
