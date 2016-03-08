import React, { Component } from 'react';
import { Link } from 'react-router';
import AddCategoryButton from './AddCategoryButton';
import map from 'lodash/map';
import noop from 'lodash/noop';

import SidebarItem from './SidebarItem';

export default class Sidebar extends Component {
  static defaultProps = {
    categories: [{title: 'asd'}],
    updateCategories: noop
  };

  render() {
    return (
      <div>
        <ul className='sidebar-list'>
        {
          map(this.props.categories, category => {
            return (
              <Link activeClassName='sidebar-active-link' key={category.id} className='link' to={`category/${category.id}`}>
                <SidebarItem className='sidebar-list-item'>
                  {category.title}
                </SidebarItem>
              </Link>
            );
          })
        }
          <li>
            <AddCategoryButton updateCategories={this.props.updateCategories} />
          </li>
        </ul>
      </div>
    );
  }
}
