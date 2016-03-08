import Category from '../models/Category';
import Note from '../models/Note';
import { addModelToHash } from '../helpers/app-helper';
import React, { Component } from 'react';

export default class AddCategoryButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isBeingEdited: false
    };
  }

  handleOnKeyDown(e){
    if (e.which !== 13) { return; }

    this.props.updateCategories(categories => addModelToHash(categories, new Category(e.target.value.trim(), new Note('Start Here', 'Start Here'))))
    this.setState({
      isBeingEdited: false
    });
  }

  handleOnClick() {
    this.setState({
      isBeingEdited: true
    });
  }

  render() {
    return this.state.isBeingEdited
      ? (
          <input autoFocus onKeyDown={::this.handleOnKeyDown} style={{marginLeft: '20px'}}/>
        )
      : (
          <button onClick={::this.handleOnClick} className="add-category-button btn">
            Add Category
          </button>
        )
  }
}
