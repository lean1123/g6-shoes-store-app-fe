import AdminAxiosClient from './AxiosClient';

const orderApi = {
	createOrder: (orderRequest) => {
		const url = '/orders';
		return AdminAxiosClient.post(url, orderRequest, {
			withCredentials: true,
		});
	},
	// getOrdersByUserId: (userId) => {
	// 	const url = `/orders/user/${userId}`;
	// 	return AdminAxiosClient.get(url);
	// },
	getOrdersByUserId: async (userId) => {
		const url = `/orders/user/${userId}`;
		try {
			console.log('Đang tải đơn hàng cho userId:', userId);
			console.log('URL đầy đủ:', url);
			
			// Kiểm tra xem userId có đúng format không
			if (!userId || typeof userId !== 'string') {
				throw new Error('UserId không hợp lệ');
			}

			const response = await AdminAxiosClient.get(url);
			console.log('Response từ API:', response);
			return response;
		} catch (error) {
			console.error('Lỗi khi tải đơn hàng:', {
				message: error.message,
				response: error.response?.data,
				status: error.response?.status
			});
			throw error;
		}
	},
	getAll: () => {
		const url = '/orders';
		return AdminAxiosClient.get(url);
	},
	getOrderById: (orderId) => {
		const url = `/orders/${orderId}`;
		return AdminAxiosClient.get(url);
	},
	search: (keyword) => {
		const url = `/orders/search`;
		return AdminAxiosClient.get(url, {
			params: { keyword },
		});
	},
};

export default orderApi;
