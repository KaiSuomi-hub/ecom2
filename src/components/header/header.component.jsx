import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import { Logo } from './crown.png';

const Header = () => (
		<div className="header">
			<Link className="logo-container" to="/">
			</Link>
			<div className="options">
				<Link className="option" to="/shop"> Shop </Link>
				<Link className="option" to="/shop"> Contact </Link>

			</div>
		</div>

)
export default Header;