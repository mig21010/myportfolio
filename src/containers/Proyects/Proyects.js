import React, { Component } from 'react';
import { Container, Relative, Flex } from 'theme/grid';
import { A } from 'theme/types';
import {
	ImageButton,
	Index
} from './Proyects_style';

class Proyects extends Component {
	render() {
		return (
			<Container>
				<Relative marginBottom="50px">
					<Index>
						<h1>01</h1>
					</Index>
					<h1>My Proyects</h1>
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
