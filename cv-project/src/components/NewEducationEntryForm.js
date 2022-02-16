import React, { Component } from 'react';


class NewEducationEntryForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            school: '', 
            subject: '',
            from: '',
            to: '',
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
			school: '',
			subject: '',
			from: '',
			to: '',
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
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="school">University</label>
					<input
						name="school"
						placeholder="School"
						value={this.state.school}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="subject">Subject of Study</label>
					<input
						name="subject"
						placeholder="Mathematics"
						value={this.state.subject}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="from">From</label>
					<input
						name="from"
						value={this.state.from}
						type="date"
						onChange={this.handleChange}
					/>

					<label htmlFor="to">To</label>
					<input
						name="to"
						type="date"
						value={this.state.to}
						onChange={this.handleChange}
					/>
				</div>

				<div>
					<button>Submit</button>
				</div>
			</form>
		);
	}
}
  
export default NewEducationEntryForm;