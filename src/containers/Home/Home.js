import React, { Component } from 'react';
import {Container} from 'theme/grid';
import {
 Image,
 CatImage,
 RevealP
  } from './Home_style';
import WhenInView from 'components/WhenInView/WhenInView';

export default class Home extends Component {
	static propTypes = {};
	render() {
		return (
			<Container>
			<CatImage>
				<h1>Miguel Angel Escamilla Juárez</h1>
				<h2>Web Developer</h2>
			</CatImage>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Lorem ipsum olor sit amet, consectetur adipiscing elit. Vivamus id quam magna. Vivamus tincidunt 
				turpis id metus finibus finibus. Aenean bibendum dolor libero. Vestibulum ac risus ut purus placerat tempus. 
				Maecenas ac arcu eu elit tempus egestas eu a ex. Nunc eget purus at urna sollicitudin fringilla ut quis leo. 
				Vivamus non erat in velit tincidunt volutpat. In est velit, lobortis at elit vitae, laoreet egestas mi. Duis 
				sit amet metus lacus. Duis mi felis, eleifend vitae libero vel, ullamcorper gravida lectus. Nunc leo felis, 
				tincidunt vel facilisis at, laoreet sed lorem. Praesent vulputate a ante et tincidunt.

			</RevealP>
			}	
			</WhenInView>

				{/*<Image src={require('../assets/cat.jpg')} alt="cat-image"/>*/}
				
			</Container>
		);
	}
}
