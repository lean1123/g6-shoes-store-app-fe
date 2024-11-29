import AdminAxiosClient from "./AxiosClient";


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
    

};

export default userApi;