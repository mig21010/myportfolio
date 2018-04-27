import React, { Component } from 'react';
import {Container, Div, Flex, Relative} from 'theme/grid';
import {
 Image,
 CatImage,
 RevealP,
 MeImage,
 Title,
 ItemImage,
 TitleItem,
 Imagec
  } from './Home_style';
import WhenInView from 'components/WhenInView/WhenInView';


export default class Home extends Component {
	static propTypes = {};
	render() {
		return (
			<Container>
			<Div marginLeft="10px">
			<CatImage>
				<h1>Hey! I'm Miguel Angel Escamilla</h1>
				<h2>Web Developer</h2>
				<h2>"You have to be curious about the world in which you live. Look things up, chase down every reference
				and go deeper than anybody else that's how you'll get ahead. AK"</h2>
			</CatImage>
			</Div>
				<Title>About me:</Title>
			<Flex justify="center">
			<MeImage src={require('assets/me2_cwoyml.jpg')} alt="me"/>
			</Flex>
			<Div marginLeft="10px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Two years ago I did my first Web application with PHP, since then I've dedicated myself to know more about the newest
				Web technologies so Every day I keep trying to learn something new and proposing me challenges cause I think that is 
				the best way which you can get knowledge and experience. I really like that ability for develop applications with those
				ideas which born on your mind to me it's a super power to be able to create solutions in the form of a Website.
				Nowadays I'm twenty three years old and I've finished my major so now I'm looking for one opportunity where I can develop my
				skills, learn new things and share my knowledge with others. 
				
			</RevealP>
			}
			</WhenInView>
			</Div>
			<Title>Education:</Title>	
			<Div marginLeft="40px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Informatics - National Autonomous University of Mexico (UNAM) 2013-2017.

			</RevealP>
			}	
			</WhenInView>
			</Div>
			<Title>My favorite tools:</Title>
			<Flex justify="space-around" >
			<ItemImage src={require('assets/4B2.png')} alt="ubuntu"/>
			<ItemImage src={require('assets/reactjs.png')} alt="react"/>
			<ItemImage src={require('assets/css3.png')} alt="css"/>
			</Flex>
			<Div marginTop="30px">
			<Flex justify="space-around">
			<ItemImage src={require('assets/codeIgniter.png')} alt="codeigniter"/>
			<ItemImage src={require('assets/git.png')} alt="git"/>
			<ItemImage src={require('assets/html.png')} alt="html"/>
			</Flex>
			</Div>
			<Div marginTop="30px">
			<Flex justify="space-around">
			<ItemImage src={require('assets/mysql.png')} alt="mysql"/>
			<ItemImage src={require('assets/js.png')} alt="js"/>
			<ItemImage src={require('assets/laravel.png')} alt="laravel"/>
			</Flex>
			</Div>
			<Title>My programming skills:</Title>
			<Div marginLeft="10px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				I have experience as a backend developer cause I've developed some Web Sites with PHP and design of databases, 
				lately I've used frameworks for PHP like Code Igniter and now I'm taking a course about Laravel, besides I know
				about JavaScript and CSS but I'd like to learn frameworks in the front end development in fact I did this portfolio
				with ReactJs, cause I don't like be in my comfort zone so, someday I hope to become a full stack developer.

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
			<Div marginLeft="15px">
			<Flex justify="center">
			<Imagec src={require('assets/php.png')} alt="php"/>
			</Flex>
			</Div>
			<Div marginLeft="15px"marginTop="50px">
			<Flex justify="center">
			<Imagec src={require('assets/jss.png')} alt="js"/>
			</Flex>
			</Div>
			{/*<Image src={require('../assets/cat.jpg')} alt="cat-image"/>*/}
				
			</Container>
		);
	}
}
