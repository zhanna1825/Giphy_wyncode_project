import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
        <img  src={ this.props.gif.preview_gif.url } alt="gif" width="350px" height="350px" />
    );
  }
}

export default Gif;
