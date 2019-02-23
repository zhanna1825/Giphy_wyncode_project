import React, { Component } from 'react';
import './index.css';
import Giph from './Giph.js';

class Search extends Component {

  constructor() {
    super();
    this.state = { items: [] , value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

	fetchResults(props)
	{
		console.log(this.state.value);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=X1bcZ3m4WswszHaa45Ws9uWklW6FdFN6&limit=20&offset=0&rating=G&lang=fr&q=`+this.state.value)
      .then(result=>result.json())
      .then(json =>{
         this.setState( {items : json.data} )
      } 
    )
	}

	handleChange(event) {
       this.setState({value: event.target.value});
    }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." id="search" value={this.state.value} onChange={this.handleChange}/>
        <div className="block">
          <button type="submit" value="Submit" onClick={() => {this.fetchResults(this.state.searchQuery)}}>Submit</button>
        </div>
        <Giph items={this.state.items}/>
      </div>
    );
  }
}

export default Search;
