import AdminAxiosClient from "./AxiosClient";


const orderDetailApi = {
    getOrderDetail: (orderId) => {
        const url = `/order-details/order/${orderId}`;
        return AdminAxiosClient.get(url);
    },
}

export default orderDetailApi;