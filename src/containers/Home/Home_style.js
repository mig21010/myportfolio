import styled, {css} from 'styled-components';

export  const Image = styled.img `
width: 69%;
`;

export  const CatImage = styled.div`
height: 100vh;
background-image: url(${require('../../assets/me.jpg')});
background-repeat: no-repeat;
background-size: 500px 700px;
background-position: center;


display: flex;
flex-direction: column;
align-content: center;
justify-content: top;
text-align: top;
color: #13456B;

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
	background-color: #E6EDEB;
	transform-origin: left;
	transform: rotateY(90deg);

	transition: transform 0.8s;
}
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(10deg);
    }
  `}

`;