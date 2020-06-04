import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/pages/Index';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <div>
      <Router>
       <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
