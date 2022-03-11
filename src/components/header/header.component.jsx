import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
// import { Logo } from './crown.png';
import { auth } from '../../firebase/firebase.utils';
//*here's a oatuh prop from app.js and rout
const Header = ({currentUser}) => (
		<div className="header">
			<Link className="logo-container" to="/">
			</Link>
			<div className="options">
				<Link className="option" to="/shop"> Shop </Link>
				<Link className="option" to="/shop"> Contact </Link>
			{/* below is in use an auth method, signOut, which comes with firebase */}
			{
				currentUser ?
					<div className="option" onClick={()=>auth.signOut()}>Sign out</div>
					:
					<Link className="option" to="/signin"> Sign in </Link>
			}
			{/* above is a ternary operator
			div if true and link if false
			currentUser is automatically an object, and true if contains data.
			null, which is the default is false and thus a link
			*/}
			</div>
		</div>

)
export default Header;