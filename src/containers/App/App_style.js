import styled from 'styled-components';
import { white, blue } from 'theme/variables';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 79vw;
	top: 10vh;
	height: 90vh;
	background-image: url(${require('assets/logo.svg')});
	background-color: ${white};
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	z-index: -99;

`;
// background-image: url(${require('assets/react.png')});