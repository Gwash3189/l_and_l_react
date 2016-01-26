import React, { Component } from 'react';

export default class Note extends Component {
  static defaultProps = {
    note: {}
  };

  render() {
    return (
      <div>
        Note
      </div>
    );
  }
}
