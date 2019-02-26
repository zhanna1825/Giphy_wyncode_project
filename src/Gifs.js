import React from 'react';
import Gif from './Gif.js'


const Gifs = (props) => {
    return (
      <div className="testing">
        { props.items.length > 0 &&
          props.items.map(image => (
              <Gif image={image} key={image.images.preview_gif.url}/>
          ))
        }
      </div>
    )
  }

export default Gifs;
