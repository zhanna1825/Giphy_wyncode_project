
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Search } />
          {/* <Route path="/weather/:weatherId" component={ WeatherApp } /> */}
        </div>
      </BrowserRouter>
    )
   }
   


ReactDOM.render(<Root />, document.getElementById('root'));
