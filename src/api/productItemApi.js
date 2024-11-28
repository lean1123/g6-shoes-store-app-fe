import AdminAxiosClient from './AxiosClient';

const productItemApi = {
	getAllProductItems: (productId) => {
		return AdminAxiosClient.get(
			`/product-items/getListProductItems/${productId}`,
		);
	},

	getProductItemById: (id) => {
		return AdminAxiosClient.get(`/product-items/${id}`);
	},

	addNewProductItem: (productItemData) => {
		return AdminAxiosClient.post('/product-items', productItemData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	},

	updateProductItem: (id, productItemData) => {
		return AdminAxiosClient.put(`/product-items/${id}`, productItemData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	},

	deleteProductItem: (id) => {
		return AdminAxiosClient.delete(`/product-items/${id}`);
	},

	getRecentProducts: () => {
		return AdminAxiosClient.get('/product-items/recent', {
			withCredentials: true,
		});
	},

	getTopSaleProductItems: (page = 0, size = 9) => {
		return AdminAxiosClient.get('/product-items/top-sale', {
			params: { page, size },
		});
	},

	getNewProductItems: (page = 0, size = 9) => {
		return AdminAxiosClient.get('/product-items/new', {
			params: { page, size },
		});
	},
};

export default productItemApi;
