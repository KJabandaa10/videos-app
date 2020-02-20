import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoCard from "./VideoCard";

class App extends React.Component {
  state = { vids: [] };

  onTermSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ vids: res.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList vids={this.state.vids} />
        <VideoCard props={this.state.vids} />
      </div>
    );
  }
}

export default App;
