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
	getUserInfo: async (userId) => {
        // Bỏ /api vì đã có trong baseURL
        const url = `/users/${userId}`;
        console.log('Calling getUserInfo with URL:', url);
        console.log('UserId received:', userId);
        
        try {
            const response = await AdminAxiosClient.get(url);
            console.log('getUserInfo success response:', response);
            return response;
        } catch (error) {
            console.log('getUserInfo error details:', {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message
            });
            throw error;
        }
    },
	update: async (id, userData) => {
        return AdminAxiosClient.put(`/users/${id}`, userData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    // Thêm các phương thức mới cho địa chỉ
	updateAddress: async (userId, addressId, addressData) => {
        const url = `/users/${userId}/addresses/${addressId}`;
        
        // Đảm bảo gửi đúng format
        const formattedData = {
            homeNumber: addressData.homeNumber,
            street: addressData.street,
            ward: addressData.ward,
            district: addressData.district,
            city: addressData.city
        };

        console.log('Update address request:', {
            url,
            data: formattedData
        });

        try {
            const response = await AdminAxiosClient.put(url, formattedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            console.error('Update address error:', error.response?.data);
            throw error;
        }
    },

    addAddress: async (userId, addressData) => {
        const url = `/users/${userId}/addresses`;
        return AdminAxiosClient.post(url, addressData, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    },
};
export default userApi;
