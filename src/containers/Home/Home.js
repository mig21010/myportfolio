import React, { Component } from 'react';
import {Container, Div, Flex} from '../../theme/grid';
import {
 CatImage,
 RevealP,
 MeImage,
 Title,
 ItemImage,
 Imagec
  } from './Home_style';
import WhenInView from '../../components/WhenInView/WhenInView';
import WOW from 'wowjs';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import GoRuby from 'react-icons/lib/go/ruby';

export default class Home extends Component {
	componentDidMount(){
		new WOW.WOW().init();
	}
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
			<MeImage className="wow slideInUp" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/me2_cwoyml.jpg')} alt="me"/>
			</Flex>
			<Div marginLeft="10px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Two years ago  and a half I did my first Web application with PHP, since then I've dedicated myself to know more about the newest
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
			<FaGraduationCap size={44} color="DarkGoldenRod"/> Informatics - National Autonomous University of Mexico (UNAM) 2013-2017.
			</RevealP>
			
			}	
			</WhenInView>
			</Div>
			<Title>My favorite tools:</Title>
			<Div marginLeft="15px">
			<Flex justify="space-around" >
			<ItemImage className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/4B2.png')} alt="ubuntu"/>
			<ItemImage className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/reactjs.png')} alt="react"/>
			<ItemImage className="wow fadeInDown" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/css3.png')} alt="css"/>
			</Flex>
			</Div>
			<Div marginLeft="15px" marginTop="30px">
			<Flex justify="space-around">
			<ItemImage className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/codeIgniter.png')} alt="codeigniter"/>
			<ItemImage className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/git.png')} alt="git"/>
			<ItemImage className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/html.png')} alt="html"/>
			</Flex>
			</Div>
			<Div marginLeft="15px" marginTop="30px">
			<Flex justify="space-around">
			<ItemImage className="wow fadeInUp" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/mysql.png')} alt="mysql"/>
			<ItemImage className="wow fadeInUp" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/js.png')} alt="js"/>
			<ItemImage className="wow fadeInUp" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/laravel.png')} alt="laravel"/>
			</Flex>
			</Div>
			<Title>My programming skills:</Title>
			<Div marginLeft="15px" marginLeft="10px">
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				<GoRuby size={34} color="DarkRed " /> I have experience as a backend developer cause I've developed some Web Sites with PHP and design of databases, 
				lately I've used frameworks for PHP like Code Igniter and now I'm taking a course about Laravel, besides I know
				about JavaScript and CSS but I'd like to learn frameworks in the front end development in fact I did this portfolio
				with ReactJs cause I think that is very important to use those kind of tools to solve problems from IU and I wanna say that
				I don't like be in my comfort zone so, someday I hope to become a full stack developer.

			</RevealP>
			}	
			</WhenInView>
			</Div>
			<WhenInView>
			{({isInView}) => 
			<RevealP hide={!isInView}>
				Some of these technologies have allowed me to work more easier, maintainable and organized.
			</RevealP>
			}	
			</WhenInView>
			<Div marginLeft="15px">
			<Flex justify="center">
			<Imagec className="wow lightSpeedIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/php.png')} alt="php"/>
			</Flex>
			</Div>
			<Div marginLeft="15px"marginTop="50px">
			<Flex justify="center">
			<Imagec className="wow rollIn" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/jss.png')} alt="js"/>
			</Flex>
			</Div>
			{/*<Image src={require('../assets/cat.jpg')} alt="cat-image"/>*/}
				
			</Container>
		);
	}
}
