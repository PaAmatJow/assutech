import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';

import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
	const location = useLocation();
	return (
		<>
			<Nav />
			<ScrollToTop>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='team' element={<Team />} />
					<Route path='contact' element={<Contact />} />
				</Routes>
			</ScrollToTop>
			<Footer />
		</>
	);
}

export default App;
