import AdminAxiosClient from './AxiosClient';

const userApi = {
	getUserInfo: (userId) => {
		const url = `/users/${userId}`;
		return AdminAxiosClient.get(url);
	},
};

export default userApi;
