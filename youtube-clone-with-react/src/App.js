import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Results from "./components/Results";
import SearchBar from "./components/searchBar";
import Video from "./components/Video";


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

  handleClearHome = () => {
    this.setState({
      apiResults: [],
    });
  };

  render() {
    return (
      <div>
        <NavBar clearHome={this.handleClearHome} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  display={this.state.apiResults.length}
                />
                <Results results={this.state.apiResults} />
              </>
            }
          />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </div>
    );
  }
}

export default App;
