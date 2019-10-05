import React from 'react';

import TransferForm from '../components/TransferForm';
import SourcesForm from '../components/SourcesForm';

class New extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<TransferForm />
				<SourcesForm />
			</>
		);
	}
}

export default New;
