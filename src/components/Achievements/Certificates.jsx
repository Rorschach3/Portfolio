import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';

// Placeholder data for certificates
let certificates = [
	{
		type: 'PDF',
		file: 'PM_Accelerate.pdf',
	},
	{
		type: 'Image',
		file: 'Hack_Reactor.png',
	},
	{
		type: 'PDF',
		file: 'Prompt_Injection.pdf',
	},
	{
		type: 'Image',
		file: '.png',
	},
];

var settings = {
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 6,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: true,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const Certificates = () => {
	const arrowRef = useRef(null);

	let certificateDisplay = certificates.map((item, i) => (
		<div key={i}>
			{item.type === 'PDF' ? (
				<object
					data={item.file}
					type="application/pdf"
					width="100%"
					height="200px"
				>
					<p>Your browser does not support displaying PDFs. <a href={item.file}>Download the file.</a></p>
				</object>
			) : (
				<img src={item.file} alt="Certificate Placeholder" width="100%" height="200px" />
			)}
		</div>
	));

	return (
		<Container id='certificates'>
			<Slide direction='left'>
				<span className='green'>Achievements</span>
				<h1>Completed Courses and Certifications</h1>
			</Slide>
			<CertificatesDisplay>
				<Slider ref={arrowRef} {...settings}>
					{certificateDisplay}
				</Slider>
				<Buttons>
					<button onClick={() => arrowRef.current.slickPrev()}>
						<IoIosArrowBack />
					</button>
					<button onClick={() => arrowRef.current.slickNext()}>
						<IoIosArrowForward />
					</button>
				</Buttons>
			</CertificatesDisplay>
		</Container>
	);
};

export default Certificates;

const Container = styled.div`
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 4rem 0;

	@media (max-width: 840px) {
		width: 90%;
	}

	span {
		font-weight: 700;
		text-transform: uppercase;
	}

	h1 {
		padding-top: 1rem;
		text-transform: capitalize;
	}

	.slick-list,
	.slick-slider,
	.slick-track {
		padding: 0;
	}

	.slick-dots {
		text-align: left;
		margin-left: 1rem;
	}

	.slick-dots li button:before {
		content: '';
	}

	.slick-dots li button {
		width: 9px;
		height: 4px;
		background: linear-gradient(
			159deg,
			rgb(45, 45, 58) 0%,
			rgb(43, 43, 53) 100%
		);
		padding: 0.1rem;
		margin-top: 1rem;
		transition: all 400ms ease-in-out;
		border-radius: 50px;
	}

	.slick-dots li.slick-active button {
		background: #01be96;
		width: 15px;
	}

	.slick-dots li {
		margin: 0;
	}
`;

const CertificatesDisplay = styled.div`
	margin-top: 2rem;
	position: relative;
`;
const Buttons = styled.div`
	position: absolute;
	right: 0.7rem;
	bottom: -2rem;

	button {
		background-color: transparent;
		margin-left: 0.5rem;
		border: none;
		color: #01be96;
		cursor: pointer;
		font-size: 1.1rem;
	}

	@media (max-width: 530px) {
		display: none;
	}
`;
