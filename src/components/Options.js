import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    const { title, name, cost } = this.props;

    let id = this.props.id;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    return (
      <div key={id} className="feature__item">
        <input
          type="radio"
          className="feature__option"
          id={name}
          name={title}
          checked="true"
          // onClick={(title, id) => this.handleClick(title, id)}
        />
        <label htmlFor={name} className="feature__label">
          {name} ({USCurrencyFormat.format(cost)})
        </label>
      </div>
    );
  }
}

export default Options;
