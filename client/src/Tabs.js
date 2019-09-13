import React from 'react';
import { Tab } from 'semantic-ui-react'

import './Tabs.css';

const panes = [
	{
		menuItem: 'All Games',
		//render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
	},
	{
		menuItem: 'CS: GO',
		//render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
	},
	{
		menuItem: 'Dota 2',
		//render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
	},
	{
		menuItem: 'LoL',
		//render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
	}

]

const Tabs = () => (
	<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default Tabs;
