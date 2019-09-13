import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Edit from './Edit';

class App extends React.Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/edit' component={Edit}/>
				</Switch>
			</div>
		);

		return(
			<Switch>
				<App/>
			</Switch>
		);
	}
}

export default App;
