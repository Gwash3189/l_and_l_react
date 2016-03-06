import React, { Component } from 'react';
import { Link } from 'react-router';
import { markdowned } from './../helpers/app-helper';

export default class Note extends Component {
  static defaultProps = {
    note: {},
    categoryId: 0
  };

  truncate(str) {
    return str.length > 150
      ? str.substr(0, 100).trim() + '...'
      : str;
  }

  render() {
    return (
      <Link className="link" to={`category/${this.props.categoryId}/note/${this.props.note.id}`}>
      <div className="media note-list-item">
        <div className="media-body">
          <h4 className="media-heading">{this.props.note.title}</h4>
          <div dangerouslySetInnerHTML={{__html: markdowned(this.truncate(this.props.note.content))}}/>
        </div>
      </div>
      </Link>
    );
  }
}
