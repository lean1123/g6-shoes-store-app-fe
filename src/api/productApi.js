import AdminAxiosClient from './AxiosClient';

const productApi = {
	getAll: () => {
		const url = '/products';
		return AdminAxiosClient.get(url);
	},
};

export default productApi;
