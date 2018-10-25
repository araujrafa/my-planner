import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader'

// Components
import Books from './components/Books/';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to='/books/'>Livros</Link></li>
        </ul>
      </nav>
    
      <Route path='/books/' exact component={Books} />
    </div>
  </Router>
)

export default hot(module)(App);