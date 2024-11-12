
function SignUpForm() {

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="boder-createAccount pt-3">
          <div className="flex justify-center">
            <h1 className="font-bold text-xl justify-center">Thêm Tài Khoản</h1>
          </div>
          <div className="flex items-center pt-3">
            <text className="ml-5 font-bold">Tên đầu:</text>
            <div className="ml-8 mb-4 search-container w-3/5">
              <input
                className="w-full boder no-border py-1  input-field"
                type="firstName"
                id="firstName"
                name="firstName"
              />
            </div>
          </div>
          <div className="flex items-center pt-3">
            <text className="ml-5 font-bold">Tên cuối:</text>
            <div className="ml-8 mb-4 search-container w-3/5">
              <input
                className="w-full boder no-border py-1  input-field"
                type="lastName"
                id="lastName"
                name="lastName"
              />
            </div>
          </div>
          <div className="flex items-center pt-3">
            <text className="ml-5 font-bold ">SDT:</text>
            <div className="ml-16 mb-4 search-container w-3/5">
              <input
                className="w-full boder no-border py-1  input-field"
                type="sdt"
                id="sdt"
                name="sdt"
              />
            </div>
          </div>
          <div className="flex items-center pt-3">
            <text className="ml-5 font-bold ">Địa chỉ:</text>
            <div className="ml-10 mb-4 search-container w-3/5">
              <input
                className="w-full boder no-border py-1  input-field"
                type="diaChi"
                id="diaChi"
                name="diaChi"
              />
            </div>
          </div>
          <div className="flex items-center pt-5">
            <text className="ml-5 font-bold">Hình ảnh:</text>
            <div className="ml-10 ">
              <input type="file" className="w-full" />
            </div>
          </div>
          <div className="flex items-center pt-8">
            <text className="ml-5 font-bold">Giới tính:</text>
            <div className="ml-10 flex justify">
              <div className="flex items-center mr-4">
                <input type="radio" name="gender" value="male" />
                <label htmlFor="male">Nam</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="gender" value="female" />
                <label htmlFor="female">Nữ</label>
              </div>
            </div>
          </div>
          <div className="flex items-center pt-8">
            <text className="ml-5 font-bold">Vai trò:</text>
            <div className="ml-14 search-container">
              <select className="w-full border no-border py-1 px-10 input-field">
                <option value="user">Người dùng</option>
                <option value="admin">Quản lý</option>
              </select>
            </div>
          </div>
          <div class="flex items-center pt-6 ml-6">
            <input type="checkbox" id="subscribe-checkbox" class="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
            <label for="subscribe-checkbox" class="text-sm font-medium text-gray-700">Bạn sẽ luôn được cập nhật các sản phẩm và ưu đãi mới nhất.</label>
          </div>
          <div className="flex justify-center pt-6">
            <button type="submit" className="bg-red py-2 px-4 text-white hover:bg-black">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
