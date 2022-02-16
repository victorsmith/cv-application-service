import React, { Component } from 'react';
import '../App';

class PersonalData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// Form submitting logic, prevent default page
	// refresh and call create method of BoxList
	// component to create new box
	handleSubmit(event) {
		event.preventDefault();
		this.props.create(this.state);
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		});
	}

	// Method causes to store all the values of the
	// input field in react state using single method
	// handleChanges of all the input field
	// using ES6 javascript feature computed property names
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	// return a form using which we add box properties
	// to create Boxes. It is controlled form i.e. values
	// of the input field not stored in DOM values are exist
	// in react component itself as state

	render() {
		return (
			<div>
				<h2>Personal</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
							name="firstName"
							placeholder="John"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>

						<label htmlFor="lastName">Last Name</label>
						<input
							name="lastName"
							placeholder="Doe"
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<label htmlFor="email">Email</label>
						<input
							name="email"
							placeholder="June 1st, 2020"
							value={this.state.email}
							onChange={this.handleChange}
						/>

						<label htmlFor="phone">Phone</label>
						<input
							name="phone"
							placeholder="June 30st, 2020"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<button>Update</button>
					</div>
				</form>
			</div>
		);
	}
}

export default PersonalData;
