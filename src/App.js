import React, { Component } from 'react';
import './App.css';
import ShoppingBanner from './components/ShoppingBanner';
import SearchBar from './containers/SearchBar';
import Footer from './components/Footer';
import ItemList from './containers/ItemList';

class App extends Component {
  render() {
    return (
        <div>
          <ShoppingBanner />
          <SearchBar />
          <Footer />
          <ItemList />
        </div>
    );
  }
}

export default App;
