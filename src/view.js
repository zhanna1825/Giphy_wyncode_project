import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    let gif = this.props.location.state.gif
    console.log(gif);
    return (

        <div className='container'>
            <Link to="/"><button type="Back" value="Back">Back</button></Link>
            <div>
             <h3> Title:  { gif.title } </h3>
            </div>
            <img src={ gif.images.original.url } alt="gif" />
        </div>
    );
  }
}

export default View;
