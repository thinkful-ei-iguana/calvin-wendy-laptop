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

  render() {
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
                title={featureTitle[idx]}
                options={featureOptions[idx]}
                className="feature__item"
              />
            ))}
          </div>
        </main>
        <Cart features={featureTitle} />
      </div>
    );
  }
}

export default App;
