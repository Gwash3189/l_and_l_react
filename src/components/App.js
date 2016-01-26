import React, { Component } from 'react';
import App from '../models/App';
import Category from '../models/Category';
import Note from '../models/Note';

export default class Main extends Component {
  static initialState = new App([
      new Category('Some Notes', [
        new Note('A Note', 'a starter note')
      ]),
      new Category('More Notes', [
        new Note('Another Note', 'a starter note about something else')
      ]),
    ]);

  render() {
    return (
      <div>
        {this.state}
        <div className='sidebar'>
        sidebar content
          {/*<Sidebar categories={this.state.categories}></Sidebar>*/}
        </div>
        <div>
          main content
          {this.props.children}
        </div>
      </div>
    );
  }
}
