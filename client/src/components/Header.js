import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

let Header = props => {
	return(
		<header>
			<ul>
  				<li><Link to='/' className="active">Esports Transfer Hub</Link></li>

  				{
  					props.auth.loggedIn ? <li id="login"><Link to='/logout'>Logout</Link></li> : <li id="login"><Link to='/login'>Login</Link></li>
  				}
			</ul>
		</header>
	);
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Header);
