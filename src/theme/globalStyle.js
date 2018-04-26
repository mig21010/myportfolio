import { injectGlobal } from 'styled-components';
import { white } from 'theme/variables';
import media from 'theme/media';



 	injectGlobal
 	 `
 	
    @import url('https://fonts.googleapis.com/css?family=Nunito');
 	 	body {
 	 		font-family: 'Nunito', sans-serif;
 	 		font-size: 22px;
 	 		${media.tablet`
 	 		 font-size: 15px;
 	 		 `}
 	 		color: ${white};
 	 		text-align: justify;
 	 		background-image: url(${require('assets/stars.jpg')});
 	 		
			
 	 	}

 	 	h1,h2,h3{
 	 		font-weight: normal;
 	 	}
         
 	
 	`;

 	// color: ${white};
 	//  		background-image: url(${require('assets/stars.jpg')});
