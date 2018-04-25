import React, { Component } from 'react';
import {Container, Div, Flex, Relative} from 'theme/grid';
import {
 Image,
 CatImage,
 RevealP,
 MeImage,
 Title
  } from './Home_style';
import WhenInView from 'components/WhenInView/WhenInView';

export default class Home extends Component {
	static propTypes = {};
	render() {
		return (
			<Container>

			<CatImage>
				<h1>Hey! I'm Miguel Angel Escamilla</h1>
				<h2>Web Developer</h2>
				<h2>"You have to be curious about the world in which you live. Look things up, chase down every reference
				and go deeper than anybody else that's how you'll get ahead. AK"</h2>
			</CatImage>
				<Title>About me...</Title>
			<Flex justify="center">
			<MeImage src={require('assets/me2_cwoyml.jpg')} alt="me"/>
			</Flex>
			<Div marginLeft="10px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Two years ago I did my first Web application with PHP, since then I've dedicated myself to know more about the newest
				Web technologies so Every day I keep trying to learn something new and proposing me challenges cause I think that is 
				the best way which you can get knowledge and experience. I really like that ability for create applications with those
				ideas which born on your mind .
				Nowadays I'm twenty three years old 
				
			</RevealP>

			}	
			</WhenInView>
			</Div>
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
