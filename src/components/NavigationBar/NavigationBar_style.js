import styled from 'styled-components'; 
import {Flex, Div} from 'theme/grid';
import {red, blue, white} from 'theme/variables';
import { Link } from 'react-router'; 

export const NavigationContainer = styled(Flex) `
	position: fixed; 
	right: 0;
	right: 2.5em; 
	top: .5em;
`; 

export const NavItem = styled(Link)`
	margin-right: 30px;
	font-size: 1em; 
	right: 1em;
	color: ${blue}
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
			background-color: ${white}; 
			z-index: -1; 
			transform: scale(1.3, 1.5);
		}
	}
`;