import React, { Component } from 'react';
import { v4 as uuid } from 'uuid'
import NewEducationEntryForm from './NewEducationEntryForm.js'
import EducationEntry from './EducationEntry.js'

class EducationList extends Component {
	constructor(props) {
		super(props);

		this.state = { educationList: [] };
		this.createEduEntry = this.createEduEntry.bind(this);
	}

    createEduEntry (info) {
        const newEntry = { ...info, id: uuid() }
        this.setState ({
            educationList: [...this.state.educationList, newEntry]
        })
    }

    renderEducationList() {
        return this.state.educationList.map ( (eduEntry) => (
            <EducationEntry key={eduEntry.id} info={eduEntry} />
        ))
    }


    render() { 
        return (
            <div>
                <h1>Education</h1>
                <NewEducationEntryForm create={this.createEduEntry} />
                {this.renderEducationList()}
            </div>
        )
    }
}

export default EducationList;
