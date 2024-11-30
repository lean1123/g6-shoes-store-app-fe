import AdminAxiosClient from './AxiosClient';

const userApi = {
	getAll: async () => {
		return AdminAxiosClient.get('/users');
	},
	getAccount: async (id) => {
		return AdminAxiosClient.get(`/accounts/${id}`);
	},
	getById: async (id) => {
		return AdminAxiosClient.get(`/users/${id}`);
	},
	getUserInfo: (userId) => {
		const url = `/users/${userId}`;
		return AdminAxiosClient.get(url);
	},
    update: async (id, userData) => {
        return AdminAxiosClient.put(`/users/${id}`, userData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    search: async (keyword) => {
        return AdminAxiosClient.get(`/users/search`, {
            params: { keyword },
        });
    },
};

export default userApi;
