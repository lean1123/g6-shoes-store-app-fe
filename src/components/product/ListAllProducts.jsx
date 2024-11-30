import { useEffect, useState } from 'react';
import productItemApi from '../../api/productItemApi';
import FilterByColor from '../filters/FilterByColor';
import FilterByPrice from '../filters/FilterByPrice';
import FilterBySize from '../filters/FilterBySize';
import ListProduct from './ListProduct';
import { Input } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const filterObject = {
	color: '',
	size: '',
	minPrice: 0,
	maxPrice: 0,
	productName: '',
};

function ListAllProducts() {
	const [filter, setFilter] = useState(filterObject);
	const [productItems, setProductItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProductItemsByFilter = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await productItemApi.search(
					filter.color,
					filter.size,
					filter.minPrice,
					filter.maxPrice,
					filter.productName,
				);

				if (response.status !== 200) {
					console.error('Failed to fetch product items by filter:', response.data);
					setError('Failed to fetch product items by filter');
					return;
				}

				setProductItems(response.data?.data || []);
			} catch (error) {
				console.error('Failed to fetch product items by filter:', error);
				setError('Failed to fetch product items by filter');
			} finally {
				setLoading(false);
			}
		};

		fetchProductItemsByFilter();
	}, [filter]);

	const handleFilterChange = (newFilter) => {
		console.log(filter);

		setFilter((prevFilter) => ({
			...prevFilter,
			...newFilter,
		}));
	};

	return (
		<div className='topSale-container'>
			<div className='flex justify-center items-center mt-5'>
				<h1 className='text-4xl font-bold'>Giày Sneaker</h1>
			</div>
			<div className='flex justify-center items-center mt-5'>
				<SearchSharpIcon />
				<Input
					placeholder='Tìm kiếm theo tên sản phẩm...'
					value={filter.productName}
					onChange={(e) => handleFilterChange({ productName: e.target.value })}
				/>
			</div>
			<div className='flex mt-4'>
				<div className='w-1/5 bg-gray-200 bg-white ml-5'>
					<FilterBySize onChange={(size) => handleFilterChange({ size })} />
					<FilterByColor onChange={(color) => handleFilterChange({ color })} />
					<FilterByPrice
						onChange={(minPrice, maxPrice) =>
							handleFilterChange({ minPrice, maxPrice })
						}
					/>
				</div>
				<div className='w-4/5'>
					{loading && <p>Loading...</p>}
					{error && <p>{error}</p>}
					<ListProduct items={productItems} />
				</div>
			</div>
		</div>
	);
}

export default ListAllProducts;
