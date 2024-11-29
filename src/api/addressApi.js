import AdminAxiosClient from './AxiosClient';

const addressApi = {
	getAddress: (userId) => {
		const url = `/addresses/user/${userId}`;
		return AdminAxiosClient.get(url);
	},
};

export default addressApi;
