import React from 'react';

import './firebase.styles.css';


class Firebase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	//here we set the fields states to empty
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault(); //on submit we prevent the default actio and hijack the data

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
					<input
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.handleChange}//here we divert to handleChange function which changes state
						required />
					<label>Email</label>
					<input
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange}//here we divert to handleChange function which changes state
						required />
					<label>Password</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Firebase;