import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Services from '../components/Services';
import Products from '../components/Products';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import ThinkBig from '../components/ThinkBig';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		const timeout = setTimeout(()=>{
			setIsLoading(false)
		},2000)
		return ()=> clearTimeout(timeout)
	},[])
	return (
		<>
			{isLoading && <Intro />}
			<Hero />
			<Companies />
			<Services />
			<Products />
			<Work />
			<Testimonials />
			<Blogs />
			<ThinkBig />
		</>
	);
};

export default Home;
