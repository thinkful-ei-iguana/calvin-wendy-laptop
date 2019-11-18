import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    const { title } = this.props;
    console.log(title);
    let id = this.props.id;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    return (
      <div key={id} className="feature__item">
        <input type="radio" id={title} name={title} value={title} />
        <label htmlFor={title}>
          {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
        </label>
      </div>
    );
  }
}

export default Options;
