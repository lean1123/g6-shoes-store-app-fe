import PropTypes from 'prop-types';

function FilterByPrice({ onChange }) {
	const handleMinPriceChange = (e) => {
		onChange({ minPrice: e.target.value });
	};

	const handleMaxPriceChange = (e) => {
		onChange({ maxPrice: e.target.value });
	};

	return (
		<div>
			<h2>Filter by Price</h2>
			<input
				type='number'
				placeholder='Min Price'
				onChange={handleMinPriceChange}
			/>
			<input
				type='number'
				placeholder='Max Price'
				onChange={handleMaxPriceChange}
			/>
		</div>
	);
}

FilterByPrice.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default FilterByPrice;
