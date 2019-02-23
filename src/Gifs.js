import React, { Component } from 'react';
import Gif from './Gif.js'
import './index.css';

class Gifs extends Component {
  render() {
    return (
      <div>
        { this.props.items.length > 0 &&
          this.props.items.map(image => (
              <Gif gif={image} key={image.images.preview_gif.url}/>
          ))
        }
      </div>
    );
  }
}

export default Gifs;
