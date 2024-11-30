import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../hooks/user/userSlice';
import orderApi from '../../api/orderApi';
import 'font-awesome/css/font-awesome.min.css';

function Profile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [orders, setOrders] = useState([]);

	const { userId } = useSelector((state) => state.persistedReducer.user);
	const { user, error: userError } = useSelector((state) => ({
		user: state.persistedReducer.userInfo.user,
		error: state.persistedReducer.userInfo.error,
	}));

	// Add these console logs
	console.log('Current user state 1:', user);
	console.log('Current error state:', userError);
	console.log(
		'Loading state:',
		useSelector((state) => state.persistedReducer.userInfo.loading),
	);

	const state = useSelector((state) => state);
	console.log('Full Redux State:', state);

	useEffect(() => {
		console.log('useEffect triggered');
		console.log('Current userId:', userId);
		console.log('Current user state:', user);

		if (userId) {
			console.log('Dispatching fetchUser with userId:', userId);
			dispatch(fetchUser(userId));
			fetchOrders(userId);
		} else {
			console.log('No userId available');
		}
	}, [dispatch, userId]);

	const fetchOrders = async (userId) => {
		try {
			console.log('Đang tải đơn hàng cho userId:', userId);
			const response = await orderApi.getOrdersByUserId(userId);
			console.log('Response từ API:', response);

			if (response?.data?.data) {
				setOrders(response.data.data);
			} else {
				console.warn('Không có dữ liệu đơn hàng');
				setOrders([]);
			}
		} catch (error) {
			console.error('Lỗi khi tải đơn hàng:', {
				message: error.message,
				response: error.response?.data,
				status: error.response?.status,
			});
			setOrders([]);
		}
	};

	const handleUpdateProfile = () => navigate('/updateProfile');
	const handleBackAddress = () => navigate('/address');
	const handleBackProfile = () => navigate('/profile');

	return (
		<div className='flex p-5 font-sans'>
			{/* Sidebar */}
			<div className='w-64 mr-5'>
				<div className='bg-orange-500 p-5 text-center rounded-full w-24 h-24 text-4xl text-white mx-auto flex items-center justify-center'>
					{user ? user.firstName.charAt(0).toUpperCase() : 'U'}
				</div>
				<p className='text-center mt-3'>
					Xin chào{' '}
					<span className='text-blue-500 font-bold'>
						{user ? `${user.firstName} ${user.lastName}` : 'Khách'}
					</span>
				</p>
				<ul className='list-none p-0 text-center mt-5 space-y-2'>
					<li className='text-blue-500'>
						<i className='fa fa-user-circle-o' aria-hidden='true'></i>
						<a href='#' onClick={handleBackProfile}>
							Thông tin tài khoản
						</a>
					</li>
					<li className='text-blue-500'>
						<i className='fa fa-list-alt' aria-hidden='true'></i>
						<a href='#'>Quản lý đơn hàng</a>
					</li>
					<li className='text-blue-500'>
						<i className='fa fa-map-marker' aria-hidden='true'></i>
						<a href='#' onClick={handleBackAddress}>
							Danh sách địa chỉ
						</a>
					</li>
					<li className='text-red-500'>
						<i className='fa fa-sign-out' aria-hidden='true'></i>
						<a href='#'>Đăng xuất</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className='flex-1'>
				{/* Account Information */}
				<div className='mb-5'>
					<h2 className='text-2xl font-bold text-gray-800'>THÔNG TIN TÀI KHOẢN</h2>
					{!user ? (
						<p className='text-red-500'>
							{userError
								? `Không thể tải thông tin người dùng: ${userError}`
								: 'Đang tải thông tin...'}
						</p>
					) : (
						<>
							<p>
								<span>Họ và tên: </span>
								{`${user.firstName} ${user.lastName}`}
							</p>
							<p>
								<span>Giới tính: </span>
								{user.gender === 'MALE' ? 'Nam' : 'Nữ'}
							</p>
							<p>
								<span>Điện thoại: </span>
								{user.phone}
							</p>
							<div className='mt-3 space-x-4'>
								<button
									onClick={handleUpdateProfile}
									className='bg-blue-500 text-white py-2 px-4 rounded font-semibold hover:bg-blue-600'
								>
									CẬP NHẬT
								</button>
							</div>
						</>
					)}
				</div>
				{/* Membership Level */}
				<div className='bg-blue-100 p-4 rounded mb-5 text-sm text-gray-700'>
					<p>
						<b>Hạng thẻ tiếp theo Silver - chiết khấu 3% membership</b>
					</p>
					<a href='#' className='text-blue-500 underline'>
						Xem thêm chính sách khách hàng thân thiết.
					</a>
				</div>

				{/* Order History */}
				<div>
					<h2 className='text-2xl font-bold text-gray-800'>
						DANH SÁCH ĐƠN HÀNG GẦN ĐÂY
					</h2>
					{orders.length > 0 ? (
						<table className='w-full border-collapse mt-2'>
							<thead>
								<tr className='border-b bg-gray-100 text-gray-700'>
									<th className='p-2 text-left'>Mã đơn hàng</th>
									<th className='p-2 text-left'>Ngày đặt</th>
									<th className='p-2 text-left'>Thành tiền</th>
									<th className='p-2 text-left'>Trạng thái thanh toán</th>
									<th className='p-2 text-left'>Vận chuyển</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => (
									<tr key={order.id} className='border-b'>
										<td className='p-2'>#{order.id}</td>
										<td className='p-2'>
											{new Date(order.createdDate).toLocaleDateString()}
										</td>
										<td className='p-2'>{order.totalPrice.toLocaleString()} đ</td>
										<td className='p-2'>{order.paymentMethod}</td>
										<td className='p-2'>{order.orderStatus}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p>Không có đơn hàng nào gần đây.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
