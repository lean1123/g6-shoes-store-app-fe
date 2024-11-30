import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userApi from '../../api/userApi'; // Đường dẫn này phải đúng với vị trí file userAPI.js

function UpdateProfile() {
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ Redux
  const { user } = useSelector((state) => ({
    user: state.persistedReducer.userInfo.user,
  }));

  const [avatar, setAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(user?.avatar || null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn trang reload
    console.log("user.id: ", user.id);
    const updatedData = new FormData(); // Sử dụng FormData để gửi dữ liệu dạng multipart/form-data
    if (avatar) updatedData.append("avatar", avatar);
    console.log("avatar: ", avatar);
    updatedData.append("firstName", e.target.firstName.value);
    console.log("firstName: ", e.target.firstName.value);
    updatedData.append("lastName", e.target.lastName.value);
    console.log("lastName: ", e.target.lastName.value);
    updatedData.append("gender", e.target.gender.value);
    console.log("gender: ", e.target.gender.value);
    updatedData.append("phone", e.target.phone.value);
    console.log("phone: ", e.target.phone.value);
  
    try {
      const response = await userApi.update(user.id, updatedData); // user.id được lấy từ Redux
      console.log("Cập nhật thành công:", response);
      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Cập nhật thất bại:", error.response?.data || error.message);
      alert("Đã xảy ra lỗi khi cập nhật thông tin. Vui lòng thử lại.");
    }
  };
  

  const handleBackToProfile = () => navigate("/profile");
  const handleBackAddress = () => navigate("/address");

  return (
    <div className="flex p-5 font-sans">
      {/* Sidebar */}
      <div className="w-64 mr-5">
        <div className="bg-orange-500 p-5 text-center rounded-full w-24 h-24 text-4xl text-white mx-auto flex items-center justify-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Avatar preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : user ? (
            user.firstName.charAt(0).toUpperCase()
          ) : (
            "U"
          )}
        </div>
        <p className="text-center mt-3">
          Xin chào{" "}
          <span className="text-blue-500 font-bold">
            {user ? `${user.firstName} ${user.lastName}` : "Khách"}
          </span>
        </p>
        <ul className="list-none p-0 text-center mt-5 space-y-2">
          <li className="text-blue-500">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
            <a href="#" onClick={handleBackToProfile}>
              Thông tin tài khoản
            </a>
          </li>
          <li className="text-blue-500">
            <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
            <a href="#">Quản lý đơn hàng</a>
          </li>
          <li className="text-blue-500">
            <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
            <a href="#" onClick={handleBackAddress}>
              Danh sách địa chỉ
            </a>
          </li>
          <li className="text-red-500">
            <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
            <a href="#">Đăng xuất</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-5">THÔNG TIN TÀI KHOẢN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar upload */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Ảnh đại diện:
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border rounded-full overflow-hidden">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Avatar preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                id="avatar-input"
              />
              <label
                htmlFor="avatar-input"
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              >
                Chọn ảnh
              </label>
            </div>
          </div>

          {/* Thông tin người dùng */}
          <div>
            <label className="block text-sm font-semibold">Họ:</label>
            <input
              type="text"
              name="firstName"
              className="w-full border p-2"
              placeholder="Họ"
              defaultValue={user?.firstName || ""}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Tên:</label>
            <input
              type="text"
              name="lastName"
              className="w-full border p-2"
              placeholder="Tên"
              defaultValue={user?.lastName || ""}
            />
          </div>

          {/* Giới tính */}
          <div>
            <label className="block text-sm font-semibold mb-2">Giới tính:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="MALE"
                  className="mr-2"
                  defaultChecked={user?.gender === "MALE"}
                />
                Nam
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  className="mr-2"
                  defaultChecked={user?.gender === "FEMALE"}
                />
                Nữ
              </label>
            </div>
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="block text-sm font-semibold">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              className="w-full border p-2"
              placeholder="Số điện thoại (*)"
              defaultValue={user?.phone || ""}
            />
          </div>

          {/* Nút cập nhật */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-5 rounded"
          >
            CẬP NHẬT THÔNG TIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
