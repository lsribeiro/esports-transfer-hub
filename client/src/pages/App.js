import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import New from '../pages/New';

import { getUser } from '../redux/actions/authActions';

class App extends React.Component {

	componentDidMount() {
		this.props.getUser();
	}

	render() {
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
}

App = connect(state => {
	return {
		auth: state.auth
	}
}, { getUser })(App);

export default App;
