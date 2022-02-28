import React from 'react';

import './sign-in.styles.css';
import Firebase from '../../components/firebase/firebase.component'

const SignIn = () => (
	<div className="sign-in">
		<h1>Sign in</h1>
		<Firebase/>
	</div>
)

export default SignIn;
