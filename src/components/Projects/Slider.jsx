import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

let data = [
	{
		img: './brandboost.png',
		disc: 'Elevate your social media brand with our AI-powered platform. Expand your reach, boost engagement rates, and maintain a positive sentiment effortlessly.',
		link: 'https://github.com/BrandBoost-Ai/Brandboost-Ai',
	},
	{
		img: './weatherApp.png',
		disc: 'A basic Weather App created with two Python-based frameworks, Tkinter and Flask. This app uses OpenWeatherMap.org for retrieving real-time weather data based on user input.',
		link: 'https://github.com/Rorschach3/weather_app',
	},
	{
		img: './beautySalon.png',
		disc: "A mock beauty salon website designed for easy appointment scheduling and showing the salon's location online.",
		link: 'https://github.com/Rorschach3/beauty-Salon',
	},
	{
		img: './projectBeta.png',
		disc: "CarCar, an application for managing aspects of an automobile dealership—specifically its inventory, service center, and sales.",
		link: 'https://github.com/Rorschach3/Project-Beta',
	},
];

var settings = {
	className: 'center',
	centerMode: true,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				centerMode: false,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			},
		},
	],
};
const SliderComp = () => {
	const arrowRef = useRef(null);
	let sliderProject = '';
	sliderProject = data.map((item, i) => <Project item={item} key={i} />);
	return (
		<Container>
			<Slider ref={arrowRef} {...settings}>
				{sliderProject}
			</Slider>
			<Buttons>
				<button onClick={() => arrowRef.current.slickPrev()} className='back'>
					<IoIosArrowBack />
				</button>
				<button onClick={() => arrowRef.current.slickNext()} className='next'>
					<IoIosArrowForward />
				</button>
			</Buttons>
		</Container>
	);
};

export default SliderComp;

const Container = styled.div`
	position: relative;
`;

const Buttons = styled.div`
	button {
		width: 2rem;
		height: 2rem;
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
		color: #01be96;
		border: none;
		position: absolute;
		top: 45%;
		right: -1rem;
	}

	.back {
		left: -1rem;
	}
`;
