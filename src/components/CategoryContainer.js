import React, { Component } from 'react';
import Category from './../models/Category'

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

  renderWithNoCategory() {
    return (
      <div>
        {
          this.state.editingTitle
            ? <input ref='newNoteBookInput' onKeyDown={::this.handleKeyDown} onBlur={::this.handleBlurTitle} className='new-note-book-input'/>
            : <h1 onClick={::this.handleEditTitle}>New Notebook</h1>
        }
      </div>
    )
  }

  renderWithCategory() {
    return <span>Category</span>
  }

  createNewCategory(title) {
    this.props.updateCategories((categories) => {
      return categories.concat(new Category(title))
    });
  }

  handleKeyDown(e) {
    const keys = {
      '27': 'escape',
      '13': 'enter'
    };

    if (keys[e.which] === 'enter') {
      this.createNewCategory(e.target.value);
      this.handleBlurTitle();
    }
    if (keys[e.which] === 'escape') {
      this.handleBlurTitle();
    }
  }

  handleEditTitle() {
    this.setState({
      editingTitle: true
    }, () => {
      this.refs.newNoteBookInput.focus();
    });
  }

  handleBlurTitle() {
    this.setState({
      editingTitle: false
    });
  }

  render() {
    const markUp = (
      <div>
        {
          this.props.params.id
          ? this.renderWithCategory()
          : this.renderWithNoCategory()
        }
      </div>
    )

    return markUp
  }
}
