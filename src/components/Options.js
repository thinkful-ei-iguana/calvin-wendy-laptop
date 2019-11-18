import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    const { title, name, cost, format } = this.props;
    console.log(format);
    let id = this.props.id;

    return (
      <div key={id} className="feature__item">
        <input
          type="radio"
          className="feature__option"
          id={name}
          name={title}

          // checked="true"
          // onClick={(title, id) => this.handleClick(title, id)}
        />
        <label htmlFor={name} className="feature__label">
          {name} ({cost})
        </label>
      </div>
    );
  }
}

export default Options;
