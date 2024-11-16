import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 732000; // Price for one item

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity, ensuring it doesn't go below 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate total price
  const totalPrice = pricePerItem * quantity;

  return (
    <div className="flex justify-center p-6 bg-gray-100">
      {/* Left Section: Cart Items */}
      <div className="w-2/3 bg-white p-6 shadow-md rounded-lg mr-6">
        <form action="/cart" method="post">
          <h2 className="text-xl font-semibold mb-4">GIỎ HÀNG CỦA BẠN</h2>
          <p className="mb-6">
            Bạn đang có{" "}
            <span className="font-semibold">{quantity} sản phẩm</span> trong giỏ
            hàng
          </p>

          <div className="flex items-center justify-between border p-4 rounded-md mb-6">
            <img
              src="https://product.hstatic.net/1000230642/product/hsm007501xdl-7_6d848f7807bf47c8accc319e2b24b606_medium.jpg" // Replace with your product image URL
              alt="Product"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <p className="font-medium">
                Giày Thể Thao Nam Biti’s Hunter X LiteDash - Original Edition
                2K24 HSM007501XDL
              </p>
              <div className="flex justify-start items-center space-x-4 text-gray-500 mt-2">
                <p>
                  Màu sắc: <span className="ml-2">○</span>
                </p>
                <p>Kích thước: 39</p>
              </div>
              {/* Price per item */}
              <p className="font-semibold text-red-500 mt-2">
                Giá: {pricePerItem.toLocaleString()} ₫
              </p>
            </div>

            {/* Quantity and Total Price Section */}
            <div className="flex flex-col items-start mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <p className="font-semibold text-red-500">
                {totalPrice.toLocaleString()} ₫
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Ghi chú đơn hàng</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              placeholder="Thêm ghi chú cho đơn hàng..."
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Xuất hoá đơn cho đơn hàng</label>
          </div>
        </form>
      </div>

      {/* Right Section: Order Summary */}
      <div className="w-1/3 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">THÔNG TIN ĐƠN HÀNG</h2>
        <div className="flex justify-between mb-4">
          <span>Tổng tiền:</span>
          <span className="text-red-500 font-semibold text-lg">
            {totalPrice.toLocaleString()} ₫
          </span>
        </div>
        <p className="text-gray-500 mb-6">
          Phí vận chuyển sẽ được tính ở trang thanh toán.
        </p>
        <p className="text-gray-500 mb-6">
          Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
        </p>

        <button className="w-full bg-red-500 text-white py-2 rounded mb-4 font-semibold">
          ĐẶT HÀNG NGAY (Áp dụng cho Việt Nam)
        </button>
        <button className="w-full bg-black text-white py-2 rounded font-semibold">
          ĐẶT HÀNG QUỐC TẾ (Cho các quốc gia khác)
        </button>
      </div>
    </div>
  );
};

export default Cart;
