import React from 'react';
import { Link } from 'react-router-dom'

 const Gif =(props)=> {
    return (
        <li>
          <Link to={{
              pathname: '/view',
              state: { gif: props.gif }
            }}>
            <img src={ props.image.images.preview_gif.url } alt="gif" />
          </Link>
        </li>
    );
  }


export default Gif;
