import { Component } from "react";
import "./searchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const noSearch = (
      <div id="blank">No Search Results Yet! Please submit a search Above!</div>
    );

    return (
      <div>
        <div id="form-container">
          <form id="search-form" onSubmit={this.props.handleSubmit}>
            <input
              id="search-input"
              type="text"
              placeholder="Search for a video"
              onChange={this.props.handleChange}
            />
            <input type="submit" id="submit-bttn" value="Search" />
          </form>
        </div>
        {this.props.display > 0 ? null : noSearch}
      </div>
    );
  }
}
