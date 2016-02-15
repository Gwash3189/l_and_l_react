import React, { Component, cloneElement } from 'react';
import App from '../models/App';
import Category from '../models/Category';
import Note from '../models/Note';
import Sidebar from './Sidebar';


export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = new App([
      new Category('Some Notes', [
        new Note('A Note', 'a starter note')
      ]),
      new Category('More Notes', [
        new Note('Another Note', 'a starter note about something else')
      ]),
    ]);
  }

  updateCategories(f) {
    this.setState({
      categories: f(this.state.categories)
    });
  }

  render() {
    return (
      <div className='container sidebar-left-push'>
          <div className='sidebar-container'>
            <Sidebar categories={this.state.categories}/>
          </div>
          <div className='col-md-10 main-content-container'>
            {cloneElement(this.props.children, {
              updateCategories: ::this.updateCategories,
              ...this.state
            })}
          </div>
      </div>
    );
  }
}
