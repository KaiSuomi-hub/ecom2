import React from 'react';
import './custom-button.styles.css';

//add a bunch of props to the button
const CustomButton = ({ children,  ...otherProps}) => (
	<button className="custom-button" {...otherProps}>
	{children}
	</button>
)

export default CustomButton;
