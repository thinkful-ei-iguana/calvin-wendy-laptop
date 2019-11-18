import React, { Component } from "react";
import "./App.css";
import Features from "./components/Features";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  handleClick = (feature, newValue) => {
    this.setState({ selected: newValue });
    console.log(feature);
  };

  render() {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    console.log(USCurrencyFormat);
    const { features } = this.props;

    const featureTitle = Object.keys(features);
    const featureOptions = featureTitle.map(feature => features[feature]);

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <h2>Customize your laptop!!!</h2>
        <main>
          <div className="feature__label">
            {featureTitle.map((feature, idx) => (
              <Features
                key={idx}
                id={idx}
                title={feature}
                options={featureOptions[idx]}
                className="feature__item"
                checked={
                  featureOptions[idx].name === this.state.selected[feature].name
                }
                format={USCurrencyFormat}
                // handleUpdate={(feature, newValue) =>
                //   this.updateFeature(feature, newValue)
                // }
              />
            ))}
          </div>
          <Cart
            cartOptions={this.state.selected}
            selectedOptions={Object.keys(this.state.selected)}
            handleUpdate={() => this.updateFeature}
            format={this.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
