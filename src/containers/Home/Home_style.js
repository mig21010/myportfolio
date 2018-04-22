import styled from 'styled-components';

export  const Image = styled.img `
width: 100%;
`;

export  const CatImage = styled.div`
height: 100vh;
background-image: url(${require('../../assets/cat.jpg')});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
text-align: center;
color: blue;

font-size: 1.5
emh1{
	margin-botton: 0;
}
`;

export const RevealP = styled.p `
position: relative;
&:after {
	content: ' ';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	transform-origin: left;
	transform: rotateY(90deg);

	transition: transform 3s;
}


`;