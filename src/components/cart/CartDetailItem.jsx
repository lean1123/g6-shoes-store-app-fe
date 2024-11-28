import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

CartDetailItem.propTypes = {
	item: PropTypes.object,
	onChange: PropTypes.func,
};

function CartDetailItem({ item, onChange }) {
	const [quantity, setQuantity] = useState(1);
	const totalPrice = useMemo(
		() => item.productItem?.price * quantity,
		[item.productItem?.price, quantity],
	);
	// Function to increase quantity
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
		onChange(true);
	};

	// Function to decrease quantity, ensuring it doesn't go below 1
	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
			onChange(true);
		}
	};
	return (
		<div>
			<div className='flex items-center justify-between border p-4 rounded-md mb-6'>
				<img
					src={item.productItem.listDetailImages[0]}
					alt={'product item'}
					className='w-20 h-20 object-cover rounded-md'
				/>
				<div className='flex-1 ml-4'>
					<p className='font-medium'>{item.product.name}</p>
					<div className='flex justify-start items-center space-x-4 text-gray-500 mt-2'>
						<p>
							Màu sắc: <span className='ml-2'>{item.productItem?.color}</span>
						</p>
						<p>Kích thước: {item.productItem?.size}</p>
					</div>
					{/* Price per item */}
					<p className='font-semibold text-red-500 mt-2'>
						Giá: {item.productItem?.price.toLocaleString()} ₫
					</p>
				</div>

				{/* Quantity and Total Price Section */}
				<div className='flex flex-col items-start mt-4 space-y-2'>
					<div className='flex items-center space-x-2'>
						<button
							type='button'
							onClick={decreaseQuantity}
							className='px-2 py-1 bg-gray-200 rounded'
						>
							-
						</button>
						<span>{quantity}</span>
						<button
							type='button'
							onClick={increaseQuantity}
							className='px-2 py-1 bg-gray-200 rounded'
						>
							+
						</button>
					</div>
					<p className='font-semibold text-red-500'>
						{totalPrice.toLocaleString()} ₫
					</p>
				</div>
			</div>
		</div>
	);
}

export default CartDetailItem;
