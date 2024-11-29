import FilterByCategory from '../../filters/FilterByCategory';
import FilterByCollection from '../../filters/FilterByCollection';
import FilterByColor from '../../filters/FilterByColor';
import FilterBySize from '../../filters/FilterBySize';
import ListProduct from '../ListProduct';

function ListTopSaleProducts() {
	return (
		<div className='topSale-container '>
			<div className='flex justify-center items-center mt-5 style={scrollStyles}'>
				<h1 className='text-4xl font-bold'>Giày Sneaker</h1>
			</div>
			<div className='flex mt-4'>
				<div className='w-1/5 bg-gray-200 ml-5 bg-white'>
					<FilterByCollection />

					<FilterBySize />

					<FilterByColor />

					<FilterByCategory />

					<div>
						<h1 className='font-bold mt-4'>STOCK STATUS</h1>
					</div>
					<div className='pt-6 flex items-center'>
						<input
							type='checkbox'
							id='subscribe-checkbox'
							className='mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
						></input>
						<label
							htmlFor='subscribe-checkbox'
							className='text-sm font-medium text-gray-700'
						>
							On sale
						</label>
					</div>
				</div>
				<div className='w-4/5'>
					<div className='flex justify-between'>
						<div>
							<button className='font-bold text-sm'>Trang chủ</button>
							<text className='ml-1 mr-1'>/</text>
							<button className='font-bold text-sm'>Giày Sneaker</button>
						</div>
						<div className=' search-container mr-3'>
							<select className='w-full border no-border py-1 px-10 input-field font-bold'>
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
							<ListProduct items={[]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListTopSaleProducts;
