import React from "react";
import "font-awesome/css/font-awesome.min.css";

function UpdateProfile() {
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
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
            <a href="">Thông tin tài khoản</a>
          </li>
          <li className="text-blue-500">
            <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
            <a href="">Quản lý đơn hàng</a>
          </li>
          <li className="text-blue-500">
            <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
            <a href="">Danh sách địa chỉ</a>
          </li>
          <li className="text-red-500">
            <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
            <a href="">Đăng xuất</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-5">THÔNG TIN TÀI KHOẢN</h2>
        
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Họ:</label>
            <input type="text" className="w-full border p-2" placeholder="Lê" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Tên:</label>
            <input type="text" className="w-full border p-2" placeholder="Thanh An" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Email:</label>
            <input type="email" className="w-full border p-2" placeholder="thanhan@gmail.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Số điện thoại:</label>
            <input type="text" className="w-full border p-2" placeholder="Số điện thoại (*)" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Ngày sinh:</label>
            <input type="text" className="w-full border p-2" placeholder="01/01/2003" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Địa chỉ:</label>
            <input type="text" className="w-full border p-2" placeholder="Địa chỉ" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Tỉnh thành:</label>
            <select className="w-full border p-2">
              <option value="">Vui lòng chọn tỉnh/thành phố</option>
              <option value="Hanoi">Hà Nội</option>
              <option value="HCM">Hồ Chí Minh</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 mt-5 rounded">
            CẬP NHẬT THÔNG TIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
