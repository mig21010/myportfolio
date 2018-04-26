import { css } from 'styled-components'; 
const sizes = {
	phone: 376, 
	tablet: 768,
	desktop: 992, 
	giant: 1170

};

// const media = Object.keys(sizes).reduce((finalMedia, size) => {
// 	return{
// 		...finalMedia,
// 		[size]: function(...args){
// 			return css ` 
// 	@media(max-width: ${sizes[size]}px){
// 		${css(...args)}
// 	}
// 	`;
// 		}
// 	}
// }, {}); 
// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator
}, {});
// function phone(...args) {
// 	return css ` 
// 	@media(max-width: ${sizes.phone}px){
// 		${css(...args)}
// 	}
// 	`;
// }
// function tablet(...args) {
// 	return css ` 
// 	@media(max-width: ${sizes.tablet}px){
// 		${css(...args)}
// 	}
// 	`;
// }
// function desktop(...args) {
// 	return css ` 
// 	@media(max-width: ${sizes.desktop}px){
// 		${css(...args)}
// 	}
// 	`;
// }
// function giant(...args) {
// 	return css ` 
// 	@media(max-width: ${sizes.giant}px){
// 		${css(...args)}
// 	}
// 	`;
// }

// const media = {
// 	phone,
// 	tablet,
// 	desktop,
// 	giant
// }; 

export default media;