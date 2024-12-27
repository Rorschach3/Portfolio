import React, { useState } from 'react';
import { GiCompass } from 'react-icons/gi';

const Header = () => {
	const [bar, setBar] = useState(false);
	return (
		<div className={`flex items-center justify-between max-w-6xl w-4/5 mx-auto py-6 relative ${bar ? 'bg-gray-900' : ''}`}>
			<div className="flex items-center gap-2">
				<span className="text-2xl text-green-500">
					<GiCompass />
				</span>
				<h1 className="font-semibold text-lg">Portfolio</h1>
			</div>
			<div
				className={`fixed inset-0 flex flex-col bg-green-500 items-center justify-center gap-8 text-2xl font-bold transition-all duration-500 overflow-hidden ${bar ? 'h-screen' : 'h-0'}`}
			>
				<span>
					<a
						href="#home"
						onClick={() => setBar(false)}
						className="text-white hover:opacity-70"
					>
						Home
					</a>
				</span>
				<span>
					<a
						href="#service"
						onClick={() => setBar(false)}
						className="text-white hover:opacity-70"
					>
						Services
					</a>
				</span>
				<span>
					<a
						href="#project"
						onClick={() => setBar(false)}
						className="text-white hover:opacity-70"
					>
						Projects
					</a>
				</span>
				<span>
					<a
						href="#achievement"
						onClick={() => setBar(false)}
						className="text-white hover:opacity-70"
					>
						Achievements
					</a>
				</span>
				<span>
					<a
						href="#footer"
						onClick={() => setBar(false)}
						className="text-white hover:opacity-70"
					>
						Contact Me
					</a>
				</span>
			</div>
			<div
				onClick={() => setBar(!bar)}
				className="flex items-center justify-center w-10 h-10 relative z-50 cursor-pointer sm:hidden"
			>
				<div
					className={`absolute w-full h-0.5 bg-white transition-all duration-500 ${bar ? 'transform rotate-45' : 'translate-y-2'}`}
				></div>
				<div
					className={`absolute w-full h-0.5 bg-white transition-all duration-500 ${bar ? 'opacity-0' : ''}`}
				></div>
				<div
					className={`absolute w-full h-0.5 bg-white transition-all duration-500 ${bar ? 'transform -rotate-45' : '-translate-y-2'}`}
				></div>
			</div>
		</div>
	);
};

export default Header;
