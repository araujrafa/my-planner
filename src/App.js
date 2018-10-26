import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader'

// Components
import Body from './components/Body';
import Books from './components/Books/';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to='/body/'>Body</Link></li>
          <li><Link to='/books/'>Books</Link></li>
        </ul>
      </nav>
    
      <Route path='/body/' exact component={Body} />
      <Route path='/books/' exact component={Books} />
    </div>
  </Router>
)

export default hot(module)(App);