import styled, {css} from 'styled-components';
import { red, blue, black } from '../../theme/variables';
import media from '../../theme/media';

export  const Image = styled.img `
width: 69%;
`;

export  const CatImage = styled.div`
height: 100vh;
background-image: url(${require('../../assets/web.jpg')});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
text-align: center;
color: #F8F4E3;

font-size: 0.9em;

${media.tablet`
	font-size: 13px;
`}
emh1{
	margin-botton: 0;
}
`;

export const MeImage = styled.img`
	margin-top:40px;
	border-radius: 50%;
	height:280px;
	weight:280px;
`;

export const ItemImage = styled.img`
 	width: 180px;
 	height: 180px;
 	${media.tablet`
    width: 100px;
    height: 100px;
  `}
  ${media.phone`
    width: 50px;
    height: 50px;
  `}
 	background-color: ${black};
 	border-radius: 20px;
 	
`;

export const TitleItem = styled.p`
	font-size: 19px; 
	color: ${blue};
	position: relative;
`;


export const RevealP = styled.p `
position: relative;
&:after {
	content: ' ';
	position: absolute;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #F8F4E3;
	opacity: 0.6;
	transform-origin: left;
	transform: rotateY(90deg);

	transition: transform 2s;
}
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(10deg);
    }
  `}

`;

export const Title = styled.h1`
	color: ${red};
	font-weight: bold; 
	font-size: 30px;
	${media.tablet`
	font-size: 15px:
	`}
	margin-top: 0;
	
`;

export const Imagec = styled.img `
 width : 650px;
 height: 376px;
 border-radius: 6px;
${media.tablet `
 width: 325px;
 height:220px;
	`}
`;