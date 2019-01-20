import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import KoniPage from './pages/Koni';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={KoniPage} />
    </div>
  </Router>,
  document.getElementById('root'),
);
