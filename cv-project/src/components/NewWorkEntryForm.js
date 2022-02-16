import React, { Component } from 'react';


class NewWorkEntryForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            company: '', 
            position: '',
            from: '',
            to: '',
        };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.create(this.state);
		this.setState({
			company: '',
			position: '',
			from: '',
			to: '',
		});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="company">Company</label>
					<input
						name="company"
						placeholder="company"
						value={this.state.company}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="position">Position</label>
					<input
						name="position"
						placeholder="Software Developer"
						value={this.state.position}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="from">From</label>
					<input
						name="from"
						placeholder="June 1st, 2020"
						value={this.state.from}
						type="date"
						onChange={this.handleChange}
					/>

					<label htmlFor="to">To</label>
					<input
						name="to"
						placeholder="June 30st, 2020"
						value={this.state.to}
						type="date"
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
  
export default NewWorkEntryForm;