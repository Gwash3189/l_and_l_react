import React, { Component } from 'react';
import { Link } from 'react-router';
import cloneDeep from 'lodash/cloneDeep';
import { markdowned } from './../helpers/app-helper';

export default class NotesContainer extends Component {
  static defaultProps = {
    note: {},
    categoryTitle: '',
    categoryId: 0
  };

  handleOnChange(e) {
    const content = e.target.value;
    const note = cloneDeep(this.props.note);

    note.content = content;

    this.props.handleNoteChange(note)
  }

  render() {
    return (
      <div>
        <h1>
          <Link to={`category/${this.props.categoryId}`}>{this.props.categoryTitle}</Link> > {this.props.note.title}
        </h1>
        <div className="col-xs-6">
          <textarea className="editor" onChange={::this.handleOnChange} defaultValue={this.props.note.content}/>
        </div>
        <div className="col-xs-6" dangerouslySetInnerHTML={{__html: markdowned(this.props.note.content)}} />
      </div>
    );
  }
}
