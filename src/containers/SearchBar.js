import React, { Component } from 'react';
import '../styles/SearchBar.css';
import { addItem } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor () {
    super ();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit (event) {
    event.preventDefault() ;
    console.log('in handle submit', event.target.itemName.value);
    this.props.addItem(event.target.itemName.value);
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="itemName" />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
};

function mapDispatchToProps (dispatch) {
  return {
    addItem: function (itemName) {
      dispatch(addItem(itemName));
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
