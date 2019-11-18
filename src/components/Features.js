import React from "react";
import Options from "./Options";
import "./Features.css";

class Features extends React.Component {
  // features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + "-" + idx;
  //   return this.features;
  // });

  render() {
    const { title, options, format } = this.props;
    console.log(format);
    return (
      <form className="main__form">
        <fieldset className="feature" key={this.title}>
          <legend className="feature__name">
            <label>{title}</label>
          </legend>
          {options.map((option, idx) => (
            <Options
              key={idx}
              title={title}
              id={idx}
              name={option.name}
              cost={option.cost}
              format={format}
              // updateFeature={this.props.handleUpdate}
            />
          ))}
        </fieldset>
      </form>
    );
  }
}

export default Features;
