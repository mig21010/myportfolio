import styled from 'styled-components';
import { white, blue, black } from 'theme/variables';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 79vw;
	top: 0vh;
	height: 100vh;
	opacity: 0.7;
	background-color: ${black};
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	z-index: -99;

`;
// background-image: url(${require('assets/react.png')});

	// background-image: url(${require('assets/logo.svg')});