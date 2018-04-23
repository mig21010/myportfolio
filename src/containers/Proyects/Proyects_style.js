import styled from 'styled-components';
import { red, blue } from 'theme/variables';

export const ImageButton = styled.div`
	cursor: pointer;
	overflow: hidden;
	display: inline-block;
	& > img{
			transition: transform .3s;
	}
	&:hover{
		& > img {
			transform: scale(1.3);
		}
	}
`;

export const Index = styled.div `
 position: absolute; 
 left: 0; 
 bottom: 0;
 z-index: -1;
 font-size: 2em; 
 h1{
 	
 	margin: 0;
 	font-weight: bold; 
 	color: ${red};
 	opacity: 0.7;
 	transform: translateY(20%);
 }
`;
export const Title = styled.h1`
	color: ${blue};
	font-weight: bold; 
	margin-top: 0;
`;
