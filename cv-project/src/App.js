import './App.css';

import uniqid from 'uniqid';
import React, { Component } from 'react';
import Experience from './components/Experience.js';

// Components
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);

		this.state = {
			isEdit: 'false',
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',

			eduEntry: {
				id: uniqid(),
				schoolName: '',
				subject: '',
				startDate: '',
				endDate: '',
			},
			eduHistory: [],

			workEntry: {
				id: uniqid(),
				companyName: '',
				title: '',
				startDate: '',
				endDate: '',
			},
			workHistory: [],
		};
	}

	// Experience Functions
	handleChangeExperience = (e) => {
		this.setState({
			workEntry: {
				// id: this.state.eduEntry.id,
				companyName: e.target.value,
				title: e.target.value,
				startDate: e.target.value,
				endDate: e.target.value,
			},
		});
	};
	
	onSubmitExperience = (e) => {
		e.preventDefault();
		this.setState({
			workHistory: this.state.workHistory.concat(this.state.workEntry),
			workEntry: {
				id: uniqid(),
				companyName: '',
				title: '',
				startDate: '',
				endDate: '',
			},
		});
	};

	// Education Functions
	handleChangeEducation = (e) => {
		this.setState({
			eduEntry: {
				// id: this.state.eduEntry.id,
				schoolName: e.target.value,
				subject: e.target.value,
				startDate: e.target.value,
				endDate: e.target.value,
			},
		});
	};
	
	onSubmitEducation = (e) => {
		e.preventDefault();
		this.setState({
			education: this.state.education.concat(this.state.eduEntry),
			eduEntry: {
				// id: uniqid(),
				schoolName: '',
				subject: '',
				startDate: '',
				endDate: '',
			},
		});
	};
	

	render() {
		const {
			eduEntry,
			eduHistory,
			workEntry,
			workHistory,
		} = this.state;

		return (
			<div className="App">
				{/* Form go here */}

				{/* Experience */}
				<form onSubmit={this.onSubmitExperience}>
					<h1>Experience</h1>
					<input
						onChange={this.handleChangeExperience}
						value={workEntry.companyName}
						type="text"
						id="companyName"
					></input>
					<input
						onChange={this.handleChangeExperience}
						value={workEntry.subject}
						type="text"
						id="subject"
					></input>
					<input
						onChange={this.handleChangeExperience}
						value={workEntry.startDate}
						type="date"
						id="workStartDate"
					></input>
					<input
						id="workStartDate"
						onChange={this.handleChangeExperience}
						value={workEntry.endDate}
						type="date"
					></input>
					<button type="submit">Add</button>
				</form>

				<Experience workHistory={workHistory} />

				{/* Education */}
				<form onSubmit={this.onSubmitEducation}>
					<h1>Education</h1>
					<input
						onChange={this.handleChangeEducation}
						value={eduEntry.companyName}
						type="text"
						id="companyName"
					></input>
					<input
						placeholder="Last Name"
						onChange={this.handleChangeEducation}
						value={eduEntry.companyName}
						type="text"
						id="companyName"
					></input>
					<input
						placeholder="Email"
						onChange={this.handleChangeEducation}
						value={eduEntry.companyName}
						type="text"
						id="companyName"
					></input>
					<input
						placeholder="Phone Number"
						onChange={this.handleChangeEducation}
						value={eduEntry.companyName}
						type="text"
						id="companyName"
					></input>
					<button type="submit">Add</button>
				</form>
				<div>{/* Displaying content here */}</div>
			</div>
		);
	}
}

export default App;
