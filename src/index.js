
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import View from './View';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Search } />
          <Route path="/view" component={ View } /> 
        </div>
      </BrowserRouter>
    )
   }
   


ReactDOM.render(<Root />, document.getElementById('root'));
