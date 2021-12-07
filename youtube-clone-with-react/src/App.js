import React, { Component } from "react";
import "./App.css";
import Results from "./components/Results";

require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      apiResults: [],
      results: false,
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

  render() {
    return (
      <div>
        Hi Guys!
        <Results results={this.state.apiResults} />
      </div>
    );
  }
}

export default App;
