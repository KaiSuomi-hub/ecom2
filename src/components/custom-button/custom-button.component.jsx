import React from 'react';
import './custom-button.styles.css';

//add a bunch of props to the button
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button className={`${isGoogleSignIn
		?
	'google-sign-in':
		''}
	custom-button`} {...otherProps}>
		{/* above is a ternary to check if css class
		is-google-sign-in in should be shown or not */}
	{children}
	</button>
)

export default CustomButton;
