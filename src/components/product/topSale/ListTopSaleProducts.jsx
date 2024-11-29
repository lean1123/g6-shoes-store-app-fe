import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import productItemApi from '../../../api/productItemApi';
import ListProduct from '../ListProduct';

const pagination = {
	limit: 10,
	page: 0,
	filter: 'banChay', // Giá trị mặc định
	totalPages: 1,
};

function ListTopSaleProducts() {
	const [listTopSaleProducts, setListTopSaleProducts] = useState([]);
	const [paginationObject, setPaginationObject] = useState(pagination);

	useEffect(() => {
		const fetchListTopSaleProducts = async () => {
			try {
				const response = await productItemApi.getTopSaleProductItems(
					paginationObject?.page,
					paginationObject?.limit,
					paginationObject?.filter,
				);
				if (response.status !== 200) {
					console.error('Failed to fetch top sale products:', response);
					return;
				}

				if (response?.data?.data) {
					setListTopSaleProducts(response.data.data.data);
					setPaginationObject((prev) => ({
						...prev,
						totalPages: Math.ceil(response.data.data.totalCount / prev.limit),
					}));
				}
			} catch (error) {
				console.error('Failed to fetch top sale products:', error);
			}
		};

		fetchListTopSaleProducts();
	}, [paginationObject.page, paginationObject.limit, paginationObject.filter]);

	const handleFilterChange = (e) => {
		const value = e.target.value;
		setPaginationObject((prev) => ({ ...prev, page: 0, filter: value }));
	};

	return (
		<div className='topSale-container'>
			<div className='flex justify-center items-center mt-5'>
				<h1 className='text-4xl font-bold'>Danh sách sản phẩm bán chạy</h1>
			</div>
			<div className='flex mt-4'>
				<div className='w-4/5'>
					<div className='flex justify-between'>
						<div>
							<button className='font-bold text-sm'>Trang chủ</button>
							<span className='ml-1 mr-1'>/</span>
							<button className='font-bold text-sm'>Giày Sneaker</button>
						</div>
						<div className='search-container mr-3'>
							<select
								className='w-full border no-border py-1 px-10 input-field font-bold'
								onChange={handleFilterChange}
							>
								<option value='banChay' className='font-bold'>
									Bán chạy
								</option>
								<option value='moiNhat' className='font-bold'>
									Mới nhất
								</option>
							</select>
						</div>
					</div>
					<div className='w-full flex flex-col items-center'>
						<div className='w-full flex flex-col items-start justify-start'>
							{listTopSaleProducts.length > 0 ? (
								<ListProduct items={listTopSaleProducts} />
							) : (
								<p className='text-center mt-5'>Không có sản phẩm nào để hiển thị.</p>
							)}
						</div>
						<Pagination
							count={paginationObject.totalPages || 1}
							page={paginationObject.page + 1}
							onChange={(event, value) => {
								setPaginationObject((prev) => ({ ...prev, page: value - 1 }));
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListTopSaleProducts;
