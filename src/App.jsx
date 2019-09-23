import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadStocks, addSymbol, removeSymbol } from "./actions/index.js";
import { v4 } from "uuid";

// components
import StockList from "./components/StockList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: v4() };
  }

  render() {
    return (
      <BrowserRouter>
        <h1>App is working</h1>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
