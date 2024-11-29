import AdminAxiosClient from './AxiosClient';

const collectionApi = {
    getCollectionByBrand: (brand) => {
        return AdminAxiosClient.get(`/collections/brand/${brand}`);
    },
    getCollectionById: (id) => {
        return AdminAxiosClient.get(`/collections/${id}`);
    },
    searchCollections: (keyword) => {
        return AdminAxiosClient.get(`/collections/search`, {
            params: { keyword },
        });
    },
    addNewCollection: (collectionData) => {
        return AdminAxiosClient.post('/collections', collectionData);
    },
};

export default collectionApi;