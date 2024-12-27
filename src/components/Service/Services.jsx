import React from 'react';
import { RiCodeView } from 'react-icons/ri';
import { TiDeviceDesktop } from 'react-icons/ti';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
	return (
		<Container id='service'>
			<Slide direction='down'>
				<h4>
					<span className='green'>My services</span>
				</h4>
			</Slide>
			<Cards>
				<Slide direction='left'>
					<Card
						Icon={TiDeviceDesktop}
						title={'Software Engineer'}
						desc={`I am a skilled software developer specializing in custom software, web development, API integration, and database optimization. With expertise in modern frameworks like React, Next.js, and Express.js, I deliver scalable, user-friendly solutions tailored to your needs.`}
					/>
				</Slide>
				<Slide direction='up'>
					<Card
						Icon={RiCodeView}
						title={'Web Developer'}
						desc={`Specializing in building modern, responsive websites and applications. Using React, JavaScript, and TypeScript, I craft intuitive, enterprise-level UI/UX experiences. I utilize Tailwind CSS for sleek, efficient designs and integrate databases like MongoDB and MySQL to create powerful, data-driven solutions.`}
					/>
				</Slide>
			</Cards>
		</Container>
	);
};

export default Services;

const Container = styled.div`
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 3rem 0;
	@media (max-width: 840px) {
		width: 90%;
	}

	h1 {
		padding-top: 1rem;
	}
`;
const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin-top: 4rem;
	gap: 1rem;
`;
