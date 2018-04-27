import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import { selectItem } from '../actions/index';

class ItemList extends Component {
  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e) {
    e.preventDefault();
    console.log('in handle item select ', e.target);
    this.props.selectItem(e.target.value);
  }

  render () {
    console.log('item list:', this.props.items);

    return (
      <ul>
        {this.props.items.map(item => <Item itemName={item.itemName} key={item.itemId} onClick={this.handleItemClick} />)}
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    items: state.itemsReducer.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectItem: function (item) {
      dispatch(selectItem(item))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
