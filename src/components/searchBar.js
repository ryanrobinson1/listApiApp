import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleOnChange = event => {
    //store the search term
    this.setState({ searchTerm: event.target.value });
  };

  handleOnSubmit = event => {
    //stop the form from submitting automatically
    event.preventDefault();
    //go to the app componenet and search pass through the search term
    //the app component uses components with configuration
    //pass props from children to parent.
    this.props.onSubmit(this.state.searchTerm);
    // console.log(this.state.searchTerm);
    // console.log(this.props.onSubmit(this.state.searchTerm));
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui form">
          <div className="field">
            <form onSubmit={this.handleOnSubmit}>
              <label>Search Component</label>
              <input
                id="search"
                type="text"
                placeholder="Enter Keyword Here"
                value={this.state.searchTerm}
                onChange={this.handleOnChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
