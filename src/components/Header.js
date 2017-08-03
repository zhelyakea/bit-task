import React, { Component } from 'react'

export default class Header extends Component{
  render(){
    return(
      <h1 className="flex_item">{this.props.text}</h1>
    )
  }
}
