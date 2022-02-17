import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import NewWorkEntryForm from './NewWorkEntryForm.js';
import WorkEntry from './WorkEntry.js';

class WorkList extends Component {
	constructor(props) {
		super(props);

		this.state = { workList: [] };
		this.createWorkEntry = this.createWorkEntry.bind(this);
	}

	createWorkEntry(info) {
		const newEntry = { ...info, id: uuid() };
		this.setState({
			workList: [...this.state.workList, newEntry],
		});
	}

	renderWorkList() {
		return this.state.workList.map((workEntry) => (
			<WorkEntry key={workEntry.id} info={workEntry} />
		));
	}

	render() {
		return (
			<div>
				<h2>Experience</h2>
				<NewWorkEntryForm></NewWorkEntryForm>
				
				<NewWorkEntryForm create={this.createWorkEntry} />
				{this.renderWorkList()}
			</div>
		);
	}
}

export default WorkList;
