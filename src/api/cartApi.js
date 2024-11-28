import AdminAxiosClient from './AxiosClient';

const cartApi = {
	viewCart: () => {
		const url = '/cart';
		return AdminAxiosClient.get(url, { withCredentials: true });
	},
	addToCart: (cartDetailRequest) => {
		const url = '/cart/addToCart';
		return AdminAxiosClient.post(url, cartDetailRequest, {
			withCredentials: true,
		});
	},

	updateQuantity: (cartDetailRequest) => {
		const url = '/cart/updateQuantity';
		return AdminAxiosClient.put(url, cartDetailRequest, {
			withCredentials: true,
		});
	},

	deleteCartDetail: (productId) => {
		const url = `/cart/delete/${productId}`;
		return AdminAxiosClient.put(url, { withCredentials: true });
	},
};

export default cartApi;
