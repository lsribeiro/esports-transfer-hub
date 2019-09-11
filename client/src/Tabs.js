import React from 'react';
import './Tabs.css';
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: "1"
		};
	}

	toggle = tab => e => { //TODO: Rerwite this
		if(this.state.activeItem !== tab) {
			this.setState({
				activeItem: tab
			});
		}
	}

	render() {
		return(
			<MDBContainer>
				<MDBNav className="nav-tabs">
					<MDBNavItem>
						<MDBNavLink to="#" active={ this.state.activeItem === "1" } onClick={ this.toggle("1") } role="tab">
							CS: GO
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink to="#" active={ this.state.activeItem === "2" } onClick={ this.toggle("2") } role="tab">
							Dota 2
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink to="#" active={ this.state.activeItem === "3" } onClick={ this.toggle("3") } role="tab">
							LoL
						</MDBNavLink>
					</MDBNavItem>
				</MDBNav>
			</MDBContainer>
		);
	}
}

export default Tabs;
