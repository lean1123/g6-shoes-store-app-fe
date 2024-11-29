import AdminAxiosClient from "./AxiosClient"


const categoryApi = {
    getAll: () => {
        return AdminAxiosClient.get('/categories');
    },
    getById: (id) => {
        return AdminAxiosClient.get(`/categories/${id}`);
    },
    addNew: (categoryData) => {
        return AdminAxiosClient.post('/categories', categoryData);
    },
    search: (keyword) => {
        return AdminAxiosClient.get(`/categories/search`, {
            params: { keyword },
        });
    }
}

export default categoryApi;