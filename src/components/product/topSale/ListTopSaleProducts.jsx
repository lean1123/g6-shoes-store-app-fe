import FilterByCategory from '../../filters/FilterByCategory';
import FilterByCollection from '../../filters/FilterByCollection';
import FilterByColor from '../../filters/FilterByColor';
import FilterBySize from '../../filters/FilterBySize';
import ListProduct from '../ListProduct';

const data = [
	{
		id: 1,
		name: 'Giày Sneaker Nam HSM007801TRG',
		sizes: [38, 39, 40, 41, 42, 43],
		colors: ['Đỏ', 'Trắng', 'Xám'],
		price: 850000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 2,
		name: 'Giày Boot Nữ HSB001HSM007801TRG',
		sizes: [36, 37, 38, 39, 40],
		colors: ['Đen', 'Nâu', 'Be'],
		price: 1200000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 3,
		name: 'Giày Bóng Rổ HSB032',
		sizes: [40, 41, 42, 43],
		colors: ['Xanh Dương', 'Trắng'],
		price: 1500000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 4,
		name: 'Giày Thể Thao Nam HST034',
		sizes: [39, 40, 41, 42],
		colors: ['Đen', 'Trắng', 'Xanh Lá'],
		price: 950000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 5,
		name: 'Giày Thể Thao Nữ HSN002',
		sizes: [36, 37, 38, 39],
		colors: ['Hồng', 'Trắng', 'Xám'],
		price: 700000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 6,
		name: 'Giày Bóng Chuyền HSB022',
		sizes: [39, 40, 41, 42],
		colors: ['Xanh Dương', 'Đỏ'],
		price: 1300000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 7,
		name: 'Giày Lười Nam HSL004',
		sizes: [40, 41, 42, 43],
		colors: ['Đen', 'Nâu'],
		price: 600000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 8,
		name: 'Giày Sneakers Nữ HSN009',
		sizes: [36, 37, 38, 39],
		colors: ['Trắng', 'Đen', 'Hồng'],
		price: 850000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 9,
		name: 'Giày Sandal Nam HSN010',
		sizes: [40, 41, 42],
		colors: ['Nâu', 'Đen'],
		price: 450000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 10,
		name: 'Giày Thể Thao Nam HSM017',
		sizes: [38, 39, 40, 41, 42],
		colors: ['Xanh Dương', 'Trắng', 'Đen'],
		price: 990000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 11,
		name: 'Giày Boot Nam HSB008',
		sizes: [41, 42, 43],
		colors: ['Đen', 'Nâu'],
		price: 1500000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 12,
		name: 'Giày Sneaker Nam HSN013',
		sizes: [39, 40, 41, 42],
		colors: ['Trắng', 'Xám', 'Đen'],
		price: 800000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 13,
		name: 'Giày Slip-On Nữ HSN014',
		sizes: [36, 37, 38, 39],
		colors: ['Đen', 'Trắng', 'Be'],
		price: 650000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 14,
		name: 'Giày Running Nam HSR019',
		sizes: [40, 41, 42],
		colors: ['Đỏ', 'Trắng', 'Xám'],
		price: 1200000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
	{
		id: 15,
		name: 'Giày Thể Thao Nữ HSN022',
		sizes: [36, 37, 38, 39],
		colors: ['Hồng', 'Trắng', 'Xanh Dương'],
		price: 750000,
		image:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg',
		hoverImage:
			'https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg',
	},
];

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
							<ListProduct items={data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListTopSaleProducts;
