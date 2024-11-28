import { useEffect, useMemo, useState } from 'react';
import cartApi from '../../api/cartApi';
import CartDetailItem from './CartDetailItem';

const Cart = () => {
	const [cartDetails, setCartDetails] = useState([]);
	const [isItemChange, setIsItemChange] = useState(false);
	const totalPrice = useMemo(() => {
		if (cartDetails.length === 0 || typeof cartDetails === 'string') return 0;

		return cartDetails.reduce((total, item) => {
			return total + item.productItem.price;
		}, 0);
	}, [cartDetails]);

	const quantity = useMemo(() => {
		if (cartDetails.length === 0 || typeof cartDetails === 'string') return 0;
		return cartDetails.length;
	}, [cartDetails]);

	useEffect(() => {
		const fetchCartDetails = async () => {
			try {
				const response = await cartApi.viewCart();
				if (!response.status === 200) {
					throw new Error('Error fetching cart details');
				}
				console.log('response', response);

				setCartDetails(response.data?.data);
			} catch (error) {
				console.error('Error fetching cart details: ', error);
			}
		};

		fetchCartDetails();
	}, [isItemChange]);

	const handleItemChange = (value) => {
		setIsItemChange(value);
	};

	return (
		<div className='flex justify-center p-6 bg-gray-100'>
			<div className='w-2/3 bg-white p-6 shadow-md rounded-lg mr-6'>
				<form action='/cart' method='post'>
					<h2 className='text-xl font-semibold mb-4'>GIỎ HÀNG CỦA BẠN</h2>
					<p className='mb-6'>
						Bạn đang có <span className='font-semibold'>{quantity} sản phẩm</span>{' '}
						trong giỏ hàng
					</p>

					{typeof cartDetails === 'string' ? (
						<p>Không có sản phẩm nào trong giỏ hàng của bạn!</p>
					) : (
						cartDetails.map((item) => (
							// <div key={item.cartDetailPK.cartId + item.cartDetailPK.productItemId}>
							// 	<div className='flex items-center justify-between border p-4 rounded-md mb-6'>
							// 		<img
							// 			src={item.productItem.listDetailImages[0]}
							// 			alt={'product item'}
							// 			className='w-20 h-20 object-cover rounded-md'
							// 		/>
							// 		<div className='flex-1 ml-4'>
							// 			<p className='font-medium'>{item.product.name}</p>
							// 			<div className='flex justify-start items-center space-x-4 text-gray-500 mt-2'>
							// 				<p>
							// 					Màu sắc: <span className='ml-2'>{item.productItem?.color}</span>
							// 				</p>
							// 				<p>Kích thước: {item.productItem?.size}</p>
							// 			</div>
							// 			{/* Price per item */}
							// 			<p className='font-semibold text-red-500 mt-2'>
							// 				Giá: {item.productItem?.price.toLocaleString()} ₫
							// 			</p>
							// 		</div>

							// 		{/* Quantity and Total Price Section */}
							// 		<div className='flex flex-col items-start mt-4 space-y-2'>
							// 			<div className='flex items-center space-x-2'>
							// 				<button
							// 					type='button'
							// 					onClick={decreaseQuantity}
							// 					className='px-2 py-1 bg-gray-200 rounded'
							// 				>
							// 					-
							// 				</button>
							// 				<span>{quantity}</span>
							// 				<button
							// 					type='button'
							// 					onClick={increaseQuantity}
							// 					className='px-2 py-1 bg-gray-200 rounded'
							// 				>
							// 					+
							// 				</button>
							// 			</div>
							// 			<p className='font-semibold text-red-500'>
							// 				{totalPrice.toLocaleString()} ₫
							// 			</p>
							// 		</div>
							// 	</div>
							// </div>
							<CartDetailItem
								key={item.cartDetailPK.cartId + item.cartDetailPK.productItemId}
								item={item}
								onChange={handleItemChange}
							/>
						))
					)}

					<div className='mb-6'>
						<label className='block mb-2 text-gray-700'>Ghi chú đơn hàng</label>
						<input
							type='text'
							className='w-full border p-2 rounded-md'
							placeholder='Thêm ghi chú cho đơn hàng...'
						/>
					</div>

					<div className='flex items-center'>
						<input type='checkbox' className='mr-2' />
						<label>Xuất hoá đơn cho đơn hàng</label>
					</div>
				</form>
			</div>

			{/* Right Section: Order Summary */}
			<div className='w-1/3 bg-white p-6 shadow-md rounded-lg'>
				<h2 className='text-xl font-semibold mb-4'>THÔNG TIN ĐƠN HÀNG</h2>
				<div className='flex justify-between mb-4'>
					<span>Tổng tiền:</span>
					<span className='text-red-500 font-semibold text-lg'>
						{totalPrice.toLocaleString()} ₫
					</span>
				</div>
				<p className='text-gray-500 mb-6'>
					Phí vận chuyển sẽ được tính ở trang thanh toán.
				</p>
				<p className='text-gray-500 mb-6'>
					Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
				</p>

				<button className='w-full bg-red-500 text-white py-2 rounded mb-4 font-semibold'>
					ĐẶT HÀNG NGAY (Áp dụng cho Việt Nam)
				</button>
				<button className='w-full bg-black text-white py-2 rounded font-semibold'>
					ĐẶT HÀNG QUỐC TẾ (Cho các quốc gia khác)
				</button>
			</div>
		</div>
	);
};

export default Cart;
