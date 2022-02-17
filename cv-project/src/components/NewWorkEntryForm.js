import React, {useState} from 'react';




const NewWorkEntryForm = () => {

	const [workEntry, setWorkEntry] = useState({
		company: '',
		position: '',
		from: '',
		to: '',
	});


	const handleChange = (e) => {
		setWorkEntry((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(workEntry);
		return workEntry;
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="school">University</label>
				<input
					name="school"
					placeholder="School"
					value={workEntry.company}
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
					value={workEntry.position}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</div>
			<div>
				<label htmlFor="from">From</label>
				<input
					name="from"
					value={workEntry.from}
					type="date"
					onChange={(e) => {
						handleChange(e);
					}}
				/>

				<label htmlFor="to">To</label>
				<input
					name="to"
					type="date"
					value={workEntry.to}
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

}

export default NewWorkEntryForm;