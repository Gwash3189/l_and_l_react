import React, { Component } from 'react';

export default class SidebarItem extends Component {
  static defaultProps = {
    children: ''
  };

  render() {
    return <li {...this.props}>{this.props.children}</li>
  }
}
