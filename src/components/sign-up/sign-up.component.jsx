import React from 'react';
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.css';
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
//sign in/0auth with firebase


class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	//here we set the fields states to empty
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault(); //on submit we prevent the default action and hijack the data

		this.setState({email: '', password: ''});
}
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({[name]: value}); //here we get the name and value of fields
	}
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}//here we divert to handleChange function which changes state
						label="Email"
						required />
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}//here we divert to handleChange function which changes state
						label="Password"
						required />
					<br />
					<div className="buttons">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={signInWithGoogle}
						isGoogleSignIn> Google SignIn </CustomButton>
					{/* we pass prop isGoogleSignIn as a prop to custombutton */}
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;