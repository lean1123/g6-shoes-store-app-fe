import AdminAxiosClient from './AxiosClient';

const orderApi = {
	createOrder: (orderRequest) => {
		const url = '/orders';
		return AdminAxiosClient.post(url, orderRequest, {
			withCredentials: true,
		});
	},
	getOrdersByUserId: (userId) => {
		const url = `/orders/user/${userId}`;
		return AdminAxiosClient.get(url);
	},
};

export default orderApi;
