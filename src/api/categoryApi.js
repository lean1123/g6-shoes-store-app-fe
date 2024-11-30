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
    },
    update: (id, categoryData) => {
        return AdminAxiosClient.put(`/categories/${id}`, categoryData);
    },
    delete: (id) => {
        return AdminAxiosClient.delete(`/categories/${id}`);
    },
}

export default categoryApi;