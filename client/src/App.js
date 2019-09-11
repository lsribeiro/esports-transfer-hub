import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';

class App extends React.Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/login' component={Login}/>
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
