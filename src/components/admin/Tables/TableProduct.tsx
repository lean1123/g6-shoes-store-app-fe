import React from 'react';
import { Product } from '../types/product';
import { Add, DeleteForeverOutlined } from '@mui/icons-material';
import { EditOutlined } from '@ant-design/icons';

const productData: Product[] = [
	{
		id: 1,
		image:
			'https://th.bing.com/th/id/R.341824fb9731186e574fe00ab9a5da66?rik=uFs84f4Clc%2b7bw&pid=ImgRaw&r=0',
		description: 'Apple Watch Series 7',
		name: 'Apple Watch Series 7',
		brand: 'Apple',
		category: 'Electronics',
		collection: 'Watch',
		price: 296,
	},
	{
		id: 2,
		image:
			'https://th.bing.com/th/id/R.341824fb9731186e574fe00ab9a5da66?rik=uFs84f4Clc%2b7bw&pid=ImgRaw&r=0',
		description: 'Apple iPhone 13',
		name: 'Apple iPhone 13',
		brand: 'Apple',
		category: 'Electronics',
		collection: 'Mobile',
		price: 799,
	},
	{
		id: 3,
		image:
			'https://th.bing.com/th/id/R.341824fb9731186e574fe00ab9a5da66?rik=uFs84f4Clc%2b7bw&pid=ImgRaw&r=0',
		description: 'Apple iPad Pro',
		name: 'Apple iPad Pro',
		brand: 'Apple',
		category: 'Electronics',
		collection: 'Tablet',
		price: 999,
	},
	{
		id: 4,
		image:
			'https://th.bing.com/th/id/R.341824fb9731186e574fe00ab9a5da66?rik=uFs84f4Clc%2b7bw&pid=ImgRaw&r=0',
		description: 'Apple MacBook Pro',
		name: 'Apple MacBook Pro',
		brand: 'Apple',
		category: 'Electronics',
		collection: 'Laptop',
		price: 1299,
	},
];

const TableProduct = () => {
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
							<th className='min-w-[120px] py-2 px-4 font-medium text-black'>Price</th>
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
												src={productItem.image}
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
									<p className='text-black dark:text-white'>{productItem.category}</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>{productItem.collection}</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<p className='text-black dark:text-white'>${productItem.price}</p>
								</td>
								<td className='border-b border-[#eee] py-5 px-4'>
									<div className='flex items-center space-x-3.5'>
										{/* Add button */}
										<div className='relative group'>
											<button className='hover:text-green-500'>
												<Add className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												Add product item
											</span>
										</div>

										{/* Edit button */}
										<div className='relative group'>
											<button className='hover:text-yellow-500'>
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
