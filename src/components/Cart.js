import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    const { cartOptions, selectedOptions } = this.props;
    const total = selectedOptions.reduce(
      (acc, curr) => acc + cartOptions[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <div className="summary__option" key="key value"></div>
        {selectedOptions.map(label => (
          <div className="summary__option__label" key={label}>
            {label}
            <div className="summary__option__value">
              {cartOptions[label].name}
            </div>
            <div className="summary__option__cost">
              {cartOptions[label].cost}
            </div>
          </div>
        ))}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">{total}</div>
        </div>
      </section>
    );
  }
}

export default Cart;

// newSelected = handleUpdate
// onClick = (option) => {
// this.setState( { selected: newSelected})
// }
