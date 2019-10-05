import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import New from '../pages/New';

function App() {
  return (
  	  <Router>
    	  <div className="App">
    		  <Header />
    		  <Switch>
    		  	  <Route exact path='/' component={Home} />
    		  	  <Route exact path='/login' component={Login} />
    		  	  <Route exact path='/new' component={New} />
    		  </Switch>
    		  <Footer />
    	  </div>
	  </Router>
  );
}

export default App;
