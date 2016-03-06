import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import map from 'lodash/map';

export default class Category extends Component {
  static defaultProps = {
    category: {
      notes: []
    }
  };

  render() {
    return (
      <div>
        <h1>{this.props.category.title}</h1>
        <ul>
          {map(this.props.category.notes, note => {
            return (
                <CategoryListItem key={note.id} categoryId={this.props.category.id} note={note}/>
            );
          })}
        </ul>
      </div>
    );
  }
}
