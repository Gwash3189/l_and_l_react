import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';

import SidebarItem from './SidebarItem';

export default class Sidebar extends Component {
  static defaultProps = {
    categories: [{title: 'asd'}]
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
        </ul>
      </div>
    );
  }
}
