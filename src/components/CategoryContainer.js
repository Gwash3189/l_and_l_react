import React, { Component } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import Category from './../models/Category';
import CategoryList from './CategoryList';
import NotesContainer from './NotesContainer';
import { has, setCategory, updateNote } from './../helpers/app-helper';

export default class CategoryContainer extends Component {
  static defaultProps = {
    category: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      editingTitle: false
    };
  }

  handleNoteChange(note) {
    const category = cloneDeep(this.props.category);

    category.notes = updateNote(this.props.category.notes, note);

    this.props.updateCategories(setCategory(category));
  }

  render() {
    return has(this.props.params, 'cid', 'nid')
      ? <NotesContainer handleNoteChange={::this.handleNoteChange} categoryId={this.props.category.id} categoryTitle={this.props.category.title} note={get(this.props.category.notes, this.props.params.nid)}/>
      : <CategoryList category={this.props.category}/>
  }
}
