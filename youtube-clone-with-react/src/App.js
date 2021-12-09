import React, { Component } from "react";
import "./App.css";
import Results from "./components/Results";
import SearchBar from "./components/searchBar";
import Comments from "./components/comments"

require("dotenv").config();


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      apiResults: [],
      results: false,
      searchInput: ""
    };
  }

  fetchData = async () => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchTerm}&type=video&key=${API_KEY}`
    );
    let data = await res.json();
    this.setState({
      // searchTerm: "",
      apiResults: data.items,
      results: true,
    });
  };


  getVideos = async () => {
    const { searchTerm } = this.state;
    const videos = await apiResults.searchResults(searchInput);
    this.setState({ videos, searchInput: "" });
  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      this.getVideos();
      this.setState({
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        searchInput: "",
        videos: [],
      });
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <SearchBar />
        <Results results={this.state.apiResults} />
      </div>
    );
  }
}

export default App;
