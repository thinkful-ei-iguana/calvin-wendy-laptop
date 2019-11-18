import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    const { features } = this.props;

    const summaryList = features.map(feature => feature);

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summaryList}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value"></div>
        </div>
      </section>
    );
  }
}

export default Cart;
