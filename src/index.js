import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./components/app";

class Index extends React.Component {
  render() {
    return <AppComponent />;
  }
}

ReactDOM.render(<Index />, document.querySelector("#root"));
