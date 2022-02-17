const EducationEntry = (props) => {
	const { school, subject, from, to } = props.info;

	return (
		<div>
			<h6>{school}</h6>
			<h6>{subject}</h6>
			<h6>{from}</h6>
			<h6>{to}</h6>
		</div>
	);
};

export default EducationEntry;
