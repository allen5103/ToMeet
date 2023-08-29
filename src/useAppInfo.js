import React from 'react';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Blog from './pages/blog/Blog.jsx';
import Contact from './pages/contact/Contact.jsx';
import Project from './pages/project/Project.jsx';
import Service from './pages/service/Service.jsx';

const useAppInfo = () => {
	const routeMap = [
		{ name: 'home', path: '/', component: () => <Home /> },
		{ name: 'about', path: '/about', component: () => <About /> },
		{ name: 'blog', path: '/blog', component: () => <Blog /> },
		{ name: 'contact', path: '/contact', component: () => <Contact /> },
		{ name: 'project', path: '/project', component: () => <Project /> },
		{ name: 'service', path: '/service', component: () => <Service /> },
	];
	return { routeMap };
};

export default useAppInfo;
