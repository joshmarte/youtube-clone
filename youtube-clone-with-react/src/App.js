import './App.css';
import YouTube from 'react-youtube'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    }
  }



  render() {


    return (
      <div>
        <h1>Youtube Vid is appearing</h1>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"></iframe>
      </div>
    );



  }
}

export default App;
