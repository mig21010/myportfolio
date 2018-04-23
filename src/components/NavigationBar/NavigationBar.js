import React, { Component } from 'react';
import {NavigationContainer, NavItem} from './NavigationBar_style';

export class NavigationBar extends Component {
	render() {
		return (
			<NavigationContainer>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/Proyects">My Proyects</NavItem>
				<NavItem>My Resume</NavItem>
			</NavigationContainer>
		);
	}
}

export default NavigationBar; 