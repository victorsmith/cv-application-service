
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import NewEducationEntryForm from './NewEducationEntryForm.js'
import EducationEntry from './EducationEntry.js'


const EducationList = (props) => {
    const [educationList, setEducationListEntry] = useState([]);

    const createEduEntry = (prevListState) => {
        const newEntry = {
            ...prevListState,
            id: uuid(),
        }

        setEducationListEntry( educationList.concat(newEntry) );
    }

    const renderEducationList = () => {
        return educationList.map( (eduEntry) => (
            <EducationEntry key={eduEntry.id} info={eduEntry}/>
        ));
    }


     return (
			<div>
				<h2>Education</h2>
				<NewEducationEntryForm create={createEduEntry} />
				{renderEducationList()}
			</div>
		);
}

export default EducationList;
