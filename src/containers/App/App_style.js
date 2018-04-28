import styled from 'styled-components';
import { white, blue, black } from '../../theme/variables';
import media from '../../theme/media';


export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 0vh;
	height: 100vh;

	opacity: 0.5;
	background-color: ${black};
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	z-index: -1;

`;
// background-image: url(${require('assets/react.png')});

	// background-image: url(${require('assets/logo.svg')});