import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

import './Edit.css';

import Tabs from '../components/Tabs';
import Table from '../components/Table';
import TransferForm from '../components/TransferForm';

import authenticate from '../utils/checkAuth.js';

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
			<React.Fragment>
				<Grid centered columns={3}>
					<Grid.Column>
						<Tabs/>
					</Grid.Column>
				</Grid>
				<Grid centered columns={2}>
					<Grid.Column>
						<Table list={transfers} />
					</Grid.Column>
				</Grid>
				<Grid centered columns={1}>
					<Grid.Column>
						<TransferForm/>
					</Grid.Column>
				</Grid>
			</React.Fragment>
      	);
    }

}

export default Edit;
