function FilterByPrice() {
	return (
		<>
			return{' '}
			<div>
				<h1 className='font-bold mt-4'>GIÁ</h1>
			</div>
			<div className='search-container'>
				<div className=' flex flex-col space-y-2 group'>
					<div className='flex items-center space-x-24 mt-3'>
						<span className='font-bold text-sm'>1tr - 2tr</span>
						<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
							10
						</span>
					</div>
				</div>
				<div className='flex flex-col space-y-2 group'>
					<div className='flex items-center space-x-20 mt-3'>
						<span className='font-bold text-sm'>500k-999k</span>
						<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
							10
						</span>
					</div>
				</div>
				<div className='flex flex-col space-y-2 group mb-3'>
					<div className='flex items-center space-x-20 mt-3'>
						<span className='font-bold text-sm'>Dưới 500k</span>
						<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
							10
						</span>
					</div>
				</div>
			</div>
			return{' '}
		</>
	);
}

export default FilterByPrice;
