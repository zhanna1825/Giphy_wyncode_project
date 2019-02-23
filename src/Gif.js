import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Gif extends Component {
  render() {
    return (
        <li>
          <Link to={{
              pathname: '/view',
              state: { gif: this.props.gif }
            }}>
            <img src={ this.props.gif.images.preview_gif.url } alt="gif" width="350px" height="350px" />
          </Link>
        </li>
    );
  }
}

export default Gif;
