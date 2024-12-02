import PropTypes from 'prop-types';

function FilterByColor({ onChange }) {
	const handleColorChange = (e) => {
		onChange({ color: e.target.value });
	};

	return (
		<div>
			<h2>Filter by Color</h2>
			<select onChange={handleColorChange}>
				<option value='All Color'>All</option>
				<option value='RED'>Red</option>
				<option value='BLUE'>Blue</option>
				<option value='GREEN'>Green</option>
				{/* Add more colors as needed */}
			</select>
		</div>
	);
}

FilterByColor.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default FilterByColor;
