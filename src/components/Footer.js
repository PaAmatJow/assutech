import React from 'react';
import logo from '../img/logo-2.png';
import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='world bg-gray-900 text-white px-[2rem] md:px-[4rem] lg:px-[10rem] py-[6rem]'>
			<div className='max-w-[1780px] mx-auto'>
				{/* header */}
				<div className='flex flex-col space-y-6 xl:flex-row xl:space-y-0 xl:space-x-8 '>
					<div className='xl:w-[33.33%] pr-6 space-y-4'>
						<div className='flex items-center'>
							<img src={logo} alt='logo' />
							<h2 className='pl-4 font-sans font-semibold text-lg'>ASSUTECH</h2>
						</div>
						<p className='font-mono'>Assutech is Teamwork. Goals. Results.</p>
						<p className=''>
							Nonetheless, we do have our fair share of fun. The space is always
							open for company and hot drinks, plus, if you're feeling
							lucky,challenge the team to a PS5 game of FIFA. May the odds ever
							be in your favor 😉
						</p>
					</div>

					{/* explore */}

					<div className='xl:w-[33.33%] pr-6 space-y-4'>
						<h2 className='font-sans font-semibold text-lg'>EXPLORE</h2>
						<div className='flex justify-between'>
							<ul className='w-1/2'>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<Link to='/'>Home</Link>
								</li>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<Link to='blog'>Blog</Link>
								</li>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<Link to='team'>Team</Link>
								</li>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<a href='#'>Go Digital</a>{' '}
								</li>
							</ul>
							<ul className='w-1/2'>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<a href='#'>Join Assutech</a>
								</li>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<a href='#'>Internships</a>
								</li>
								<li className='hover:text-slate-400 transition-all duration-200'>
									<a href='#'>Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
					{/* reach us */}
					<div className='xl:w-[33.33%] pr-6 space-y-4'>
						<h2 className='font-sans font-semibold text-lg'>REACH US</h2>
						<div className='flex flex-col'>
							<a href='#' className='hover:text-slate-400 transition-all duration-200'>7 - 8 Madiba Mall</a>
							<a href='#' className='hover:text-slate-400 transition-all duration-200'>Brufut Gardens Estate</a>
							<a href='#' className='hover:text-slate-400 transition-all duration-200'>The Gambia, West Africa</a>
						</div>
						<p>
							<a href='tel:+220 3814760' className='hover:text-slate-400 transition-all duration-200'>+220 3814760</a> |{' '}
							<a href='mailto:info@assutech.gm' className='hover:text-slate-400 transition-all duration-200'>info@assutech.gm</a>
						</p>
						<div className='flex space-x-4'>
							<a href='#'>
								<FaTwitter className='text-[1.5rem] hover:text-slate-400 hover:scale-105 transition-all duraton-200' />
							</a>
							<a href='#'>
								<FaFacebookF className='text-[1.5rem] hover:text-slate-400 hover:scale-105 transition-all duraton-200' />
							</a>
							<a href='#'>
								<FaLinkedinIn className='text-[1.5rem] hover:text-slate-400 hover:scale-105 transition-all duraton-200' />
							</a>
						</div>
					</div>
				</div>
				{/* border */}
				<div className='w-[60%] mx-auto my-[4rem] border-b border-gray-600'></div>
				<div className='flex justify-between'>
					<p className='font-mono text-sm'>© 2023 Assutech.</p>
					<p className='font-mono text-sm'>All Rights Reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
