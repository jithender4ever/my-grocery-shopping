import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {

  constructor() {
    super();

    this.handleAllClick = this.handleAllClick.bind(this);
  }

  handleAllClick () {
    alert('Hi');
  }

  render () {
    return (
      <div className="footer">
        Show: <a href="#" onClick={this.handleAllClick}>All</a>, <a href="#" onClick={this.handleBuyClick}>Buy</a>, <a href="#" onClick={this.handlePurchasedClick}>Purchased</a>
      </div>
    );
  }
}

export default Footer;
