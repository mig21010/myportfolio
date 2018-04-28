import React, { Component } from 'react';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
import {
	ImageButton,
	Index, 
	Title,
	Image,
	Tag
} from './Proyects_style';
import WOW from 'wowjs';

class Proyects extends Component {
	componentDidMount(){
		new WOW.WOW().init();
	}
	render() {
		return (
			<Container>
			<Title>Open-Source Projects</Title>
				<Relative marginBottom="50px">
					<Index>
						<h1>01</h1>
					</Index>
					<h1>My Projects</h1>
					<p>Ecommerce Application to sell products implemented with a cart system. <A href="">Checkout on GitHub.</A></p>
					<Tag>#HTML#CSS#PHP#JavaScript#MySQL#HTML</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/past.png')} alt="paste"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>02</h1>
					</Index>
				<p>Gallery with PHP <A href='https://github.com/mig21010/Galeria'>Checkout on GitHub.</A></p>
				<Tag>#PHP #MySQL#CSS#HTML</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInRight" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/galery.png')} alt="gallery"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>03</h1>
				</Index>
				<p>Blog created with PHP and a database in MySQL <A href='https://github.com/mig21010/blog'>Checkout on GitHub.</A></p>
				<Tag>#PHP #MySQL #CSS#HTML</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/blog.png')} alt="blog"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>04</h1>
				</Index>
				<p>CRUD Application for a clinic to manage users, products, records and sales. <A href='https://github.com/mig21010/clinic'>Checkout on GitHub.</A></p>
				<Tag>#PHP#MySQL#AdminLTE#AJAX#DataTables#JQuery#HTML#MVC#POO</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInRight" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/clinica.png')} alt="clinic"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>05</h1>
				</Index>
				<p>Web Application for statistics and generate graphics. <A href='https://github.com/mig21010/Statisticsapp'>Checkout on GitHub.</A></p>
				<Tag>#HTML#JQuery#Bootstrap#ChartJS</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/data.png')} alt="data"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>06</h1>
				</Index>
				<p>Portfolio Site developed with React Js. <A href='https://github.com/mig21010/myportfolio'>Checkout on GitHub.</A></p>
				<Tag>#React#ES6#WebPack#StyledComponents</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInRight" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/portfolio.png')} alt="portfolio"/>
				</ImageButton>
				</Flex>
				<Relative marginBottom="50px">
				<Index>
				<h1>07</h1>
				</Index>
				<p>Final degree project in CodeIgniter about manage of employees and genarate formats on PDF for IMSS.<A href='https://github.com/mig21010/imss'>Checkout on GitHub.</A></p>
				<Tag>#CodeIgniter#AJAX#JQuery#MySQL#HTML#MVC</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image className="wow fadeInLeft" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" src={require('../../assets/imss.png')} alt="imss"/>
				</ImageButton>
				</Flex>
			</Container>

		);
	}
}
export default Proyects;
