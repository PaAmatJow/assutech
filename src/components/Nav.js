import React, {useState} from 'react'
import logo from '../img/logo-2.png'
import '../index.css'
import { FiMenu, FiX } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'
import { navAnim } from '../animation/animation'


const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	
	let state = 'close'
	if (isOpen){
		state = 'open'
	} else{
		state = 'close'
	}


  return (
		<nav className='nav z-40 w-full px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem] lg:px-[10rem] lg:pb-[4rem] h-[70px] md:h-[100px] sticky  top-0 bg-white shadow-md overflow-hidden '>
			<div className='flex items-center justify-between max-w-[1780px] mx-auto'>
				{/* logo */}
				<Link to='/' className='flex items-center'>
					<img src={logo} alt='logo' />
					<h2 className='pl-4 font-sans font-semibold text-lg'>ASSUTECH</h2>
				</Link>
				{/* burger button */}
				<div className='md:hidden'>
					<button
						className='p-2 text-xl transition-all duration-200'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <FiX className='text-[#990601]' /> : <FiMenu />}
					</button>
				</div>
				{/* desktop menu */}
				<ul className='flex items-center hidden md:flex font-sans font-semibold text-lg tracking-wider'>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='/'>Home</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='blog'>Blog</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='team'>Team</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='contact'>Contact</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
				</ul>
			</div>
			{/* mobile menu */}
			<div className={state}>
				<ul className='flex flex-col space-y-14 my-10 font-sans font-semibold text-2xl text-center tracking-[0.01rem]'>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='/' onClick={() => setIsOpen(false)}>
								Home
							</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='blog' onClick={() => setIsOpen(false)}>
								Blog
							</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='team' onClick={() => setIsOpen(false)}>
								Team
							</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
					<div className='group'>
						<li className='pl-6 '>
							<Link to='contact' onClick={() => setIsOpen(false)}>
								Contact
							</Link>
						</li>
						<div className='ml-6 mt-1 border-b-2 border-black opacity-0 group-hover:opacity-100 duration-500'></div>
					</div>
				</ul>
			</div>
		</nav>
	);
}

export default Nav