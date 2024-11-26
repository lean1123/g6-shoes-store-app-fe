const scrollStyles = {
	maxHeight: '300px',
	overflowY: 'auto',
};

function FilterByColor() {
	return (
		<>
			<div>
				<h1 className='font-bold mt-4'>MÀU SẮC</h1>
			</div>
			<div
				className='search-container bg-white flex flex-col items-start mt-3'
				style={scrollStyles}
			>
				<div className='flex flex-col space-y-2'>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#1C87BE] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-3'>
							<span className='font-bold text-left text-sm'>Xanh dương</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								7
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#1E68B2] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-4'>
							<span className='font-bold text-sm'>Xanh navy</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#F0E68C] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-12'>
							<span className='font-bold text-sm ml-0 '>Khaki</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#F4F0E3] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-4'>
							<span className='font-bold text-sm'>Trắng kem</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#28F7FF] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-5'>
							<span className='font-bold text-sm'>Xanh Lam</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#5C5A33] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-6'>
							<span className='font-bold text-sm'>Xanh rêu</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#B35B29] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-14'>
							<span className='font-bold text-sm'>Cam</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#000000] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-14'>
							<span className='font-bold text-sm'>Đen</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#B12929] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-16'>
							<span className='font-bold text-sm'>Đỏ</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#F762BD] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-12'>
							<span className='font-bold text-sm'>Hồng</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
					<div className='flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group'>
						<button className='bg-[#91541E] w-9 h-9 rounded-full mr-2 relative'>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<svg
									className='w-5 h-5 text-white'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</button>
						<div className='flex items-center space-x-14'>
							<span className='font-bold text-sm'>Nâu</span>
							<span className='text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300'>
								10
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FilterByColor;
