import React, {useState} from 'react';




const NewWorkEntryForm = (props) => {

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

		props.create(workEntry);
		// reset state 
		// => why does the prevState callback have to exist?
		setWorkEntry( () => ({
			company: '',
			position: '',
			from: '',
			to: '',
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="company">Company</label>
				<input
					name="company"
					placeholder="Elev Homes"
					value={workEntry.company}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</div>
			<div>
				<label htmlFor="position">Position</label>
				<input
					name="position"
					placeholder="Software Developer"
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