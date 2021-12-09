import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Results from "./components/Results";
import SearchBar from "./components/searchBar";
// import Comments from "./components/comments"

require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      apiResults: [],
      // results: false,
      // searchInput: ""
    };
  }

  fetchData = async () => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchTerm}&type=video&key=${API_KEY}`
    );
    let data = await res.json();
    this.setState({
      searchTerm: "",
      apiResults: data.items,
    });
  };

  // getVideos = async () => {
  //   const { searchTerm } = this.state;
  //   const videos = await apiResults.searchResults(searchInput);
  //   this.setState({ videos, searchInput: "" });
  // };

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
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<SearchBar handleChange={this.handleChange} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        Hi Guys!
        <Results results={this.state.apiResults} />
      </div>
    );
  }
}

export default App;
