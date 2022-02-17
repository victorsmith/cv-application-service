// import React, { Component } from 'react';
import React, { useState } from 'react';

const NewEducationEntryForm = () => {
	const [educationEntry, setEducationEntry] = useState({
		school: '',
		subject: '',
		from: '',
		to: '',
	});

	const handleChange = (e) => {
		setEducationEntry((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(educationEntry);
		return educationEntry;
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="school">University</label>
				<input
					name="school"
					placeholder="School"
					value={educationEntry.school}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</div>
			<div>
				<label htmlFor="subject">Subject of Study</label>
				<input
					name="subject"
					placeholder="Mathematics"
					value={educationEntry.subject}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</div>
			<div>
				<label htmlFor="from">From</label>
				<input
					name="from"
					value={educationEntry.from}
					type="date"
					onChange={(e) => {
						handleChange(e);
					}}
				/>

				<label htmlFor="to">To</label>
				<input
					name="to"
					type="date"
					value={educationEntry.to}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</div>

			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default NewEducationEntryForm;
