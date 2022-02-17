import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewWorkEntryForm from './NewWorkEntryForm.js';
import WorkEntry from './WorkEntry.js';



const WorkList = (props) => {

	const [workList, setWorkListEntry] = useState([]);

	const createWorkEntry = (prevListState) => {
		const newEntry = { ...prevListState, id: uuid() };

		setWorkListEntry( 
			workList.concat(newEntry)
		);
	}

	const renderWorkList = () => {
		console.log("hello?")
		return workList.map((workEntry) => (
			<WorkEntry key={workEntry.id} info={workEntry} />
		));
	}

	return (
		<div>
			<h2>Experience</h2>
			<NewWorkEntryForm create={createWorkEntry} />
			{renderWorkList()}
		</div>
	);

}

export default WorkList;
