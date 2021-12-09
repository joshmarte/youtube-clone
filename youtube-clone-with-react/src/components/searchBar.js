import { Component } from "react";
import "./searchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="form-container">
        <form id="search-form" onSubmit={this.props.handleSubmit}>
          <input
            id="search-input"
            type="text"
            placeholder="Search for a video"
            onChange={this.props.handleChange}
          />
          <button type="submit" id="submit-bttn">
            Search
          </button>
        </form>
      </div>
    );
  }
}
