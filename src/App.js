import React, { Component } from "react";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos: photos,
    selectedImageIndex: null
  };

  handleClick = index => {
    this.setState({ selectedImageIndex: index });
  };
  render() {
    const { photos, selectedImageIndex } = this.state;
    console.log("selected image is ", selectedImageIndex);
    return (
      <div className="App">
        {photos.map((img, index) => {
          return (
            <img
              key={img}
              src={img}
              alt="some bulshit"
              onClick={() => this.handleClick(index)}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
