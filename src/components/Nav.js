import React from 'react'
import logo from '../img/logo-2.png'
import '../index.css'
import {motion} from 'framer-motion'
import { navAnim } from '../animation/animation'

const Nav = () => {
  return (
		<nav
			className='nav z-40 w-full px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem] lg:px-[10rem] lg:pb-[4rem] h-[10vh] sticky  top-0 bg-white shadow-md overflow-hidden '
		>
			<div className='flex items-center justify-between max-w-[1780px] mx-auto'>
				<div className='flex items-center'>
					<img src={logo} alt='logo' />
					<h2 className='pl-4 font-sans font-semibold text-lg'>ASSUTECH</h2>
				</div>
				{/* burger menu */}

				<ul className='flex items-center hidden md:flex'>
					<div className='group'>
						<li className='pl-6 font-mono font-semibold text-lg tracking-wider'>
							<a href='#'>Home</a>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 font-mono font-semibold text-lg tracking-wider'>
							<a href='#'>Blog</a>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 font-mono font-semibold text-lg tracking-wider'>
							<a href='#'>Team</a>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 font-mono font-semibold text-lg tracking-wider'>
							<a href='#'>Contact</a>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
				</ul>
			</div>
		</nav>
	);
}

export default Nav