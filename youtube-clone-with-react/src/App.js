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
    };
  }

  fetchData = async () => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    console.log(API_KEY)
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchTerm}&type=video&key=${API_KEY}`
    );
    let data = await res.json();
    this.setState({
      searchTerm: "",
      apiResults: data.items,
    });
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchData();
  };

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <SearchBar
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
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
