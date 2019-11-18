import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  static defaultProps = {};
  render() {
    const { defaultValues } = this.props;
    const featuredOptions = Object.keys(defaultValues);

    console.log(featuredOptions);
    return (
      <section className="main__summary">
        <h2>Your cart</h2>

        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value"></div>
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
