import PropTypes from 'prop-types';

function FilterBySize({ onChange }) {
	const handleSizeChange = (e) => {
		onChange({ size: e.target.value });
	};

	return (
		<div>
			<h2>Filter by Size</h2>
			<select onChange={handleSizeChange}>
				<option value=''>All</option>
				<option value='35'>35</option>
				<option value='36'>36</option>
				<option value='41'>41</option>
			</select>
		</div>
	);
}

FilterBySize.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default FilterBySize;
