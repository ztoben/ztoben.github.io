import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
	<Header />,
	document.getElementById('header')
);

ReactDOM.render(
	<About />,
	document.getElementById('about')
);

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);
