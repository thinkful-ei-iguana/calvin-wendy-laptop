import React from "react";
import Options from "./Options";
import "./Features.css";

class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  // features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + "-" + idx;
  //   return this.features;
  // });

  render(props) {
    return (
      <form className="main__form">
        <fieldset className="feature" key={this.featureHash}>
          <legend className="feature__name">
            <label>{this.props.title}</label>
          </legend>
          {this.props.options.map((option, idx) => (
            <Options key={idx} id={idx} name={option.name} cost={option.cost} />
          ))}
        </fieldset>
      </form>
    );
  }
}

export default Features;
