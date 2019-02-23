import React, { Component } from 'react';

class View extends Component {
  render() {
    return (
        <div>
          <img src={ this.props.location.state.gif.images.original.url } alt="gif" />
        </div>
    );
  }
}

export default View;
