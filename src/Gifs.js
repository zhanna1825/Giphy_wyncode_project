import React, { Component } from 'react';
import Gif from './Gif.js'
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Gifs = (props) => {
    return (
      <div className="testing">
        { props.items.length > 0 &&
          props.items.map(image => (
              <Gif gif={image} key={image.images.preview_gif.url}/>
          ))
        }
      </div>
    )
  }

export default Gifs;
