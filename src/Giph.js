import React, { Component } from 'react';
import './index.css';

class Giph extends Component {

    render() {

    return (
      <div>

       { this.props.items.length > 0 &&

          this.props.items.map(( { images }) => (
           <img  src={ images.preview_gif.url } alt="gif" width="350px" height="350px" />
                        ))
        }
      </div>
    );
  }
}

export default Giph;
