import styled from 'styled-components'; 
import {Flex, Div} from 'theme/grid';
import {red, blue2, white} from 'theme/variables';
import { Link } from 'react-router'; 

export const NavigationContainer = styled(Flex) `
	cursor: pointer;
	font-weight: bold; 
	position: fixed; 
	right: 4.3em; 
	top: .5em;
`; 

export const NavItem = styled(Link)`
	margin-right: 30px;
	font-size: 1em; 
	right: 1em;
	color: ${white}
	position: relative;
	text-decoration: None;
	&:hover {
		color: ${red};
		&:after{
			content: ' ';
			position: absolute;
			left: 0;
			top: 0; 
			width: 100%; 
			height: 100%; 
			background-color: ${blue2}; 
			z-index: -1; 
			transform: scale(1.3, 1.5);
		}
	}
`;