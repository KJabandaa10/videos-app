import React from "react";
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtube from '../api/youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState = ({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    ); // old comment
  }
}

export default App;
