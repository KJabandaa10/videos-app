import React from "react";
import SearchBar from './SearchBar';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    ); // function is in App but we passing it down as props - VideoList
  }
}

export default App;
