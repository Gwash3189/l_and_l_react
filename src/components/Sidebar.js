import React, { Component } from 'react';

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
          this.props.categories.map(category => {
            return (
              <SidebarItem key={category.id} className='sidebar-list-item'>
                {category.title}
              </SidebarItem>
            );
          })
        }
        </ul>
      </div>
    );
  }
}
