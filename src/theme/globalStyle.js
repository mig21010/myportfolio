import { injectGlobal } from 'styled-components';
import { white } from 'theme/variables';



 	injectGlobal
 	 `
 	
    @import url('https://fonts.googleapis.com/css?family=Nunito');
 	 	body {
 	 		font-family: 'Nunito', sans-serif;
 	 		font-size: 20px;
 	 		color: ${white};
 	 		background-image: url(${require('assets/stars.jpg')});
 	 		
			
 	 	}

 	 	h1,h2,h3{
 	 		font-weight: normal;
 	 	}
         
 	
 	`;

 	// color: ${white};
 	//  		background-image: url(${require('assets/stars.jpg')});
