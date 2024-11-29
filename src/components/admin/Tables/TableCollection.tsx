import React, { useEffect } from 'react';
import { Add, DeleteForeverOutlined } from '@mui/icons-material';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router';
import collectionApi from '../../../api/collectionApi';
import { CircularProgress } from '@mui/material';

interface Collection {
	id: number;
	name: string;
	brandId: string;
}

const TableCollection = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [loading, setLoading] = React.useState(false);
	const [collections, setCollections] = React.useState<Collection[]>([]);

	useEffect(() => {
		const fetchCollection = async () => {
			setLoading(true);
			try {
				const response = await collectionApi.getCollectionByBrand(id);
				console.log(response.data);
				setCollections(response.data);
			} catch (error) {
				console.error('Failed to fetch collections:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchCollection();
	}, []);

	return (
		<>
			{loading ? (
				<div className='flex items-center justify-center'>
					<CircularProgress />
				</div>
			) : (
				<div className='rounded-md border border-gray-300 bg-white shadow-sm '>
					<div className='py-6 px-4 md:px-6 xl:px-7'>
						<h4 className='text-xl font-semibold text-black'>List Collections</h4>
					</div>

					<div className='max-w-full overflow-x-auto'>
						<table className='w-full table-auto'>
							<thead>
								<tr className='bg-gray-2 text-left'>
									<th className='min-w-[220px] py-2 px-4 font-medium text-black xl:pl-11'>
										Category Name
									</th>
									<th className='py-2 px-4 font-medium text-black'>Actions</th>
								</tr>
							</thead>
							<tbody>
								{collections.map((item, key) => (
									<tr key={key}>
										<td className='border-b border-[#eee] py-2 px-4 pl-9 xl:pl-11'>
											<p className='text-sm text-black'>{item.name}</p>
										</td>

										<td className='border-b border-[#eee] py-2 px-4'>
											<div className='flex items-center space-x-3.5'>
												{/* Add button */}
												{/* <div className='relative group'>
											<button
												className='hover:text-green-500'
												onClick={() => navigate('/admin/brands/add-collection')}
											>
												<Add className='w-5 h-5' />
											</button>
											<span className='absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap'>
												Add collection
											</span>
										</div> */}

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
			)}
		</>
	);
};

export default TableCollection;
