import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
  render () {
    console.log('item list:', this.props.item);
    const itemList = this.props.item;
    return (
      <div>{itemList}</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    item: state.items
  };
}

export default connect(mapStateToProps)(ItemList);
