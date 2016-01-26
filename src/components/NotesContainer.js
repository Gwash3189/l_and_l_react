import React, { Component } from 'react';

export default class NotesContainer extends Component {
  static defaultProps = {
    note: {}
  };

  render() {
    return (
      <div>
      Notes Container
      {/*<NotesContainer notes=[this.state.findNotesByCategoryId(this.props.params.id)]></NotesContainer>*/}
      </div>
    );
  }
}
