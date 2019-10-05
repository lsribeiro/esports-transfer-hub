import React from 'react';
import { Link } from 'react-router-dom';

import authenticate from '../utils/checkAuth';

import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		};
	}

	//TODO: Use redux
	componentDidMount() {
		authenticate()
			.then(isAuth => {
				if(isAuth) {
					this.setState({ loggedIn: true });
					console.log('Authorized');
				} else {
					this.setState({ loggedIn: false });
					console.log('Not auth');

				}
			})
	}

	render() {
		return(
			<header>
				<ul>
  					<li><Link to='/' className="active">Esports Transfer Hub</Link></li>

  					{
  						this.state.loggedIn ? <li id="login"><Link to='/logout'>Logout</Link></li> : <li id="login"><Link to='/login'>Login</Link></li>
  					}
				</ul>
			</header>
		);
	}
}

export default Header;
