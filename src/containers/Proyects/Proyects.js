import React, { Component } from 'react';
import { Container, Relative, Flex } from 'theme/grid';
import { A } from 'theme/types';
import {
	ImageButton,
	Index, 
	Title,
	Image,
	Tag
} from './Proyects_style';

class Proyects extends Component {
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
					<Tag>#HTML #CSS #PHP #JavaScript #MySQL</Tag>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<Image
				 src={require('assets/past.png')} alt="paste"/>
				</ImageButton>
				</Flex>
				<Relative>
				<Index>

				<h1>02</h1>
					</Index>
				<h2>Lorem ipsum dolor sit amet, consectetur <A href="">adipiscing elit.</A></h2>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<img
				 src={require('assets/imssproyecsmall.png')} alt="proyect"/>
				</ImageButton>
				</Flex>
				<Relative>
				<Index>

				<h1>03</h1>
					</Index>
				<h2>Lorem ipsum dolor sit amet, consectetur <A href="">adipiscing elit.</A></h2>
				</Relative>
				<Flex justify={'center'}>
				<ImageButton>
				<img
				 src={require('assets/imssproyecsmall.png')} alt="proyect"/>
				</ImageButton>
				</Flex>
			</Container>

		);
	}
}
export default Proyects;
