import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../Search/Search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route path = "/" exact>
        <SearchForm />
        </Route>

        <Route path = "/favorites" exact>
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
