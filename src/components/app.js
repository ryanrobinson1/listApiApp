import React from "react";
import ListComponent from "./list";
import SearchBarComponent from "./searchBar";
import Unsplash from "../api/unsplashApi";

class App extends React.Component {
  state = {
    term: "",
    images: []
  };

  handleOnSubmit = async term => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
    console.log(this.state);

    for (let i = 0; i < this.state.images.length; i++) {}
  };

  render() {
    return (
      <div>
        <div>
          <SearchBarComponent onSubmit={this.handleOnSubmit} />
        </div>

        <div className="ui card">
          <div className="content">
            <div>
              <ListComponent images={this.state.images} alt="" key="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
