import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate("/updateProfile");
  };
  const handleBackAddress = () => {
		navigate('/address');
	};
  return (
    <div className="flex p-5 font-sans">
      {/* Sidebar */}
      <div className="w-64 mr-5">
        <div className="bg-orange-500 p-5 text-center rounded-full w-24 h-24 text-4xl text-white mx-auto flex items-center justify-center">
          LA
        </div>
        <p className="text-center mt-3">
          Xin chào <span className="text-blue-500 font-bold">Lê Thanh An</span>
        </p>
        <ul className="list-none p-0 text-center mt-5 space-y-2">
          <li className="text-blue-500">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            <a href="" onClick={handleUpdateProfile}>Thông tin tài khoản</a>
          </li>
          <li className="text-blue-500">
            <i class="fa fa-list-alt" aria-hidden="true"></i>
            <a href="">Quản lý đơn hàng</a>
          </li>
          <li className="text-blue-500">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <a href="" onClick={handleBackAddress}>Danh sách địa chỉ</a>
          </li>
          <li className="text-red-500">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <a href="">Đăng xuất</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Account Information */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800">
            THÔNG TIN TÀI KHOẢN
          </h2>
          <p>
            <span>Họ và tên: </span>
            Lê Thanh An
          </p>
          <p>
            <span>Email: </span>
            lethanhan20039@gmail.com
          </p>
          <p>
            <span>Địa chỉ: </span>
            Đội 6, thôn Khoa Trường
          </p>
          <p>
            <span>Ngày sinh: </span>
          </p>
          <p>
            <span>Điện thoại: </span>
            0987835247
          </p>
          <button
           onClick={handleUpdateProfile} 
          className="bg-blue-500 text-white py-2 px-4 rounded mt-3 font-semibold hover:bg-blue-600">
            <a href="">CẬP NHẬT THÔNG TIN TÀI KHOẢN</a>
          </button>
        </div>

        {/* Membership Level */}
        <div className="bg-blue-100 p-4 rounded mb-5 text-sm text-gray-700">
          <p>
            <b>Hạng thẻ tiếp theo Silver - chiết khấu 3% membership</b>
          </p>
          <a href="#" className="text-blue-500 underline">
            Xem thêm chính sách khách hàng thân thiết.
          </a>
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            DANH SÁCH ĐƠN HÀNG GẦN ĐÂY
          </h2>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="p-2 text-left">Mã đơn hàng</th>
                <th className="p-2 text-left">Ngày đặt</th>
                <th className="p-2 text-left">Thành tiền</th>
                <th className="p-2 text-left">Trạng thái thanh toán</th>
                <th className="p-2 text-left">Vận chuyển</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">#407089</td>
                <td className="p-2">20/01/2022</td>
                <td className="p-2">705,000 đ</td>
                <td className="p-2">Đã hoàn tất</td>
                <td className="p-2">Đã giao hàng</td>
              </tr>
              {/* Thêm nhiều hàng khác nếu cần */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
