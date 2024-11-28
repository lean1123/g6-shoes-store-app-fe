import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { useNavigate } from 'react-router';

type OrderDetail = {
	id: number;
	image: string;
	productName: string;
	quantity: number;
	price: number;
};

type Order = {
	orderId: number;
	customerName: string;
	orderDate: string;
	totalAmount: number;
	paymentMethod: string;
	status: string;
	orderDetails: OrderDetail[];
};

const initialOrderData: Order = {
	orderId: 12345,
	customerName: 'John Doe',
	orderDate: '2024-11-28',
	totalAmount: 199.99,
	paymentMethod: 'Paypal',
	status: 'Pending',
	orderDetails: [
		{
			id: 1,
			image:
				'https://th.bing.com/th/id/R.ed278c63783d1bfe0db837841c1cfc0e?rik=OCUTydZ3uoh%2b%2bg&pid=ImgRaw&r=0',
			productName: 'Nike Air Max 270',
			quantity: 1,
			price: 199.99,
		},
		{
			id: 2,
			image:
				'https://th.bing.com/th/id/R.ed278c63783d1bfe0db837841c1cfc0e?rik=OCUTydZ3uoh%2b%2bg&pid=ImgRaw&r=0',
			productName: 'Adidas Yeezy Boost 350',
			quantity: 1,
			price: 199.99,
		},
	],
};

const OrderDetail = ({ isEdit }: { isEdit: boolean }) => {
	const navigate = useNavigate();
	const [orderData, setOrderData] = useState<Order>(initialOrderData);

	const updateQuantity = (id: number, increment: boolean) => {
		const updatedOrderDetails = orderData.orderDetails.map((detail) =>
			detail.id === id
				? {
						...detail,
						quantity: Math.max(1, detail.quantity + (increment ? 1 : -1)),
					}
				: detail,
		);
		setOrderData({ ...orderData, orderDetails: updatedOrderDetails });
	};

	const handleSave = () => {
		// Xử lý logic lưu dữ liệu
		console.log('Order saved:', orderData);
	};

	const handleBack = () => {
		// Điều hướng hoặc xử lý logic quay lại
		navigate(-1);
		console.log('Back button clicked');
	};

	return (
		<>
			<Breadcrumb pageName='Order Detail' />
			<div className='grid grid-cols-1'>
				{/* Order Information */}
				<div className='bg-white shadow-md rounded-lg p-6 mb-1'>
					<h2 className='text-2xl font-semibold mb-4'>Order Details</h2>
					<p className='text-lg mb-2'>
						<strong>Order ID:</strong> {orderData.orderId}
					</p>
					<p className='text-lg mb-2'>
						<strong>Customer Name:</strong> {orderData.customerName}
					</p>
					<p className='text-lg mb-2'>
						<strong>Order Date:</strong> {orderData.orderDate}
					</p>
					<p className='text-lg mb-2'>
						<strong>Total Amount:</strong> $
						{orderData.orderDetails
							.reduce((total, item) => total + item.price * item.quantity, 0)
							.toFixed(2)}
					</p>
					<p className='text-lg mb-2'>
						<strong>Payment Method:</strong> {orderData.paymentMethod}
					</p>
					<p className='text-lg mb-2'>
						<strong>Status:</strong> {orderData.status}
					</p>
				</div>
				{/* Action Buttons */}
				<div className='flex justify-end my-2 space-x-4'>
					<button
						onClick={handleBack}
						className='bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400'
					>
						Back
					</button>
					{isEdit && (
						<button
							onClick={handleSave}
							className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
						>
							Save
						</button>
					)}
				</div>

				{/* Order Details List */}
				<div className='bg-white shadow-md rounded-lg p-6'>
					<h2 className='text-2xl font-semibold mb-4'>Order Items</h2>
					<table className='w-full table-auto'>
						<thead>
							<tr className='border-b'>
								<th className='py-2 text-left'>Product</th>
								<th className='py-2 text-left'>Quantity</th>
								<th className='py-2 text-left'>Price</th>
								<th className='py-2 text-left'>Total</th>
							</tr>
						</thead>
						<tbody>
							{orderData.orderDetails.map((detail) => (
								<tr key={detail.id} className='border-b'>
									<td className='py-2'>
										<div className='flex items-center space-x-4 gap-3'>
											<img
												src={detail.image}
												alt={detail.productName}
												className='w-16 h-16 object-cover rounded-md'
											/>
											{detail.productName}
										</div>
									</td>
									<td className='py-2'>
										{isEdit ? (
											<div className='flex items-center space-x-3'>
												<button
													className='px-2 py-1 bg-gray-300 rounded'
													onClick={() => updateQuantity(detail.id, false)}
												>
													-
												</button>
												<span>{detail.quantity}</span>
												<button
													className='px-2 py-1 bg-gray-300 rounded'
													onClick={() => updateQuantity(detail.id, true)}
												>
													+
												</button>
											</div>
										) : (
											<span>{detail.quantity}</span>
										)}
									</td>
									<td className='py-2'>${detail.price.toFixed(2)}</td>
									<td className='py-2'>
										${(detail.price * detail.quantity).toFixed(2)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default OrderDetail;
