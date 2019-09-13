import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Redirect } from 'react-router-dom';

import './Edit.css';

import Tabs from './Tabs';
import Table from './Table';

import authenticate from './utils/checkAuth.js';

//TODO: Fix code duplication

class Edit extends React.Component {
    constructor(props) {
      	super(props);
      	this.state = {
        	loading: true,
        	redirect: false,
        	transfers: []
      	};
    }

    componentDidMount() {

    	authenticate().then((isAuthenticated) => {
			if(isAuthenticated) {
            	this.setState({ loading: false });
            	fetch('/api/transfers/edit')
            		.then(res => res.json())
            		.then(transfers => this.setState({ transfers }));
    		} else {
          		this.setState({ loading: false, redirect: true });
    		}
    	});

    	
    }

    render() {
      	const { loading, redirect, transfers } = this.state;
      	if (loading) {
        	return null;
      	}
      	if (redirect) {
        	return <Redirect to="/login" />;
      	}
      	return (
		  	<MDBContainer>
			  	<MDBRow center>
				  	<MDBCol lg="8" md="10" sm="12">
					  	<Tabs/>
					  	<Table list={transfers} />
				  	</MDBCol>
			  	</MDBRow>
		  	</MDBContainer>
      	);
    }

}

export default Edit;
