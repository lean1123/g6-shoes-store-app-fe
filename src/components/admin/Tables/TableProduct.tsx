import React, { useEffect } from 'react';
import {
	Add,
	DeleteForeverOutlined,
	VisibilityOutlined,
} from '@mui/icons-material';
import { EditOutlined } from '@ant-design/icons';
import productApi from '../../../api/productApi';
import brandApi from '../../../api/brandApi';
import collectionApi from '../../../api/collectionApi';
import { useNavigate } from 'react-router';

interface Product {
	id?: string;
	name: string;
	description: string;
	category: {
		id: string;
		name: string;
		description: string;
	};
	collection: {
		id: string;
		name: string;
		brandId: string;
	};
	gender: string;
	createDate?: Date;
	rating: number;
	brand?: string;
	image?: string;
}

const TableProduct = () => {
	const [loading, setLoading] = React.useState(false);
	const [productData, setProductData] = React.useState<Product[]>([]);
	const navigate = useNavigate();
	const fetchProduct = async () => {
		setLoading(true);
		try {
			const response = await productApi.getAll();
			console.log(response.data);
			const products = response.data;

			const productsWithBrand = await Promise.all(
				products.map(async (product: Product) => {
					if (product.collection && product.collection.brandId) {
						const brandResponse = await brandApi.getBrandById(
							product.collection.brandId,
						);
						return {
							...product,
							brand: brandResponse.data.brandName,
						};
					} else {
						// If no collection or brandId exists, handle accordingly (e.g., return product as is)
						return {
							...product,
							brand: 'Unknown', // Or any fallback value
						};
					}
				}),
			);

			setProductData(productsWithBrand);
		} catch (error) {
			console.error('Failed to fetch product:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div className='rounded-md border border-gray-300 bg-white shadow-sm '>
			<div className='py-6 px-4 md:px-6 xl:px-7'>
				<h4 className='text-xl font-semibold text-black'>List Products</h4>
			</div>

			<div className='max-w-full overflow-x-auto'>
				<table className='w-full table-auto'>
					<thead>
						<tr className='bg-gray-2 text-left'>
							<th className='min-w-[220px] py-2 px-4 font-medium text-black xl:pl-11'>
								Product Name
							</th>
							<th className='min-w-[120px] py-2 px-4 font-medium text-black'>
								Description
							</th>
							<th className='min-w-[150px] py-2 px-4 font-medium text-black'>Brand</th>
							<th className='min-w-[120px] py-2 px-4 font-medium text-black'>
								Category
							</th>
							<th className='min-w-[120px] py-2 px-4 font-medium text-black'>
								Collection
							</th>
							<th className='min-w-[120px] py-2 px-4 font-medium text-black'>
								Rating
							</th>
							<th className='py-2 px-4 font-medium text-black'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{productData.map((productItem, key) => (
							<tr key={key}>
								<td className='border-b border-[#eee] py-2 px-4 pl-9 xl:pl-11'>
									<div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
										<div className='h-12 w-16 rounded-md'>
											<img
												src={
													productItem?.image ||
													'https://th.bing.com/th/id/R.b1edc35f0fa63d0e0b3c9bc5537de942?rik=CZKF5DOfyXPxig&pid=ImgRaw&r=0'
												}
												alt='Product'
												className='h-12 w-16 rounded-md'
											/>
										</div>
										<p className='text-sm text-black'>{productItem.name}</p>
									</div>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>
										{productItem.description.length > 15
											? productItem.description.substring(0, 15) + '...'
											: productItem.description}
									</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>{productItem.brand}</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>
										{productItem.category ? productItem.category.name : 'Unknown'}
									</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>
										{productItem.collection ? productItem.collection.name : 'Unknown'}
									</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>{productItem.rating}⭐</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<div className='flex items-center space-x-3.5'>
										{/* Add view item */}
										<div className='relative group'>
											<button
												className='hover:text-blue-500'
												onClick={() =>
													navigate(`/admin/products/${productItem.id}/list-item`)
												}
											>
												<VisibilityOutlined className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												View item
											</span>
										</div>

										{/* Add button */}
										<div className='relative group'>
											<button
												className='hover:text-green-500'
												onClick={() =>
													navigate(`/admin/products/${productItem.id}/add-item`)
												}
											>
												<Add className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												Add product item
											</span>
										</div>

										{/* Edit button */}
										<div className='relative group'>
											<button
												className='hover:text-yellow-500'
												onClick={() => navigate(`/admin/products/edit/${productItem.id}`)}
											>
												<EditOutlined className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												Edit
											</span>
										</div>

										{/* Delete button */}
										<div className='relative group'>
											<button className='hover:text-red-500'>
												<DeleteForeverOutlined className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												Remove
											</span>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableProduct;
