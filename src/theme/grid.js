import styled, {css} from 'styled-components';
import media from 'theme/media';

 export	const Div = styled.div`
 ${({marginBottom}) => marginBottom && css `
	margin-bottom: ${marginBottom};
`}
${({marginLeft}) => marginLeft && css `
	margin-left: ${marginLeft};
`}
${({marginRight}) => marginRight && css `
	margin-right: ${marginRight};
`}
${({marginTop}) => marginTop && css `
	margin-top: ${marginTop};
`}
 `;
 export const Container = styled(Div)`
	padding-left: 10vw;
	padding-right: 10vw;
	padding-top: 30px;
	${media.phone`
	padding-left: 30px;
	padding-right: 30px;
	`}
`;

export const Relative = styled(Div)`
position: relative; 

`;

export const Flex = styled(Div)`
display : flex;
${({column}) => column && css `
	flex-direction: column;
`}
${({justify}) => justify && css `
	justify-content: ${justify}; 
`}
${({align}) => align && css `
	align-content: ${align}; 
`}
`;