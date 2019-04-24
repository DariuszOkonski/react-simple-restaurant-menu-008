import React from 'react';
import SingleItem from './SingleItem';
import './ListItems.css'

class ListItems extends React.Component {
  state = {
    allElements: [],
  }

  render() {
    const displayMenu = this.props.menu.map(item =>
      <SingleItem
        key={item.id}
        item={item}
        updateAppComponent={this.props.updateAppComponent}
      />)

    return (
      <ul>
        {displayMenu}
      </ul>
    );
  }
}

export default ListItems;