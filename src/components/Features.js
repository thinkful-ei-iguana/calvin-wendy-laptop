import React from "react";
import Options from "./Options";
import "./Features.css";

class Features extends React.Component {
  // features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + "-" + idx;
  //   return this.features;
  // });

  render() {
    return (
      <form className="main__form">
        <fieldset className="feature" key={this.featureHash}>
          <legend className="feature__name">
            <label>{this.props.title}</label>
          </legend>
          {this.props.options.map((option, idx) => (
            <Options
              key={idx}
              title={this.props.title}
              id={idx}
              name={option.name}
              cost={option.cost}
              // updateFeature={this.props.handleUpdate}
            />
          ))}
        </fieldset>
      </form>
    );
  }
}

export default Features;
