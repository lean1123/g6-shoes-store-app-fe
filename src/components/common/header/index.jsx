import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../hooks/auth/authSlice";
import { useNavigate } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(
    (state) => state.persistedReducer?.user?.accessToken
  );

  useEffect(() => {
    if (token) {
      setIsOpen(false);
    }
  }, [token]);

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    navigate("/");
  };

  return (
    <nav className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block h-8 w-auto"
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Trang Chủ
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Về Chúng Tôi
                </Link>
                <Link
                  href="/products"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sản Phẩm
                </Link>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Danh Mục
                </Link>
                <Link
                  href="/categoryforBoy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nam
                </Link>
                <Link
                  href="/categoryforGirl"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nữ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative ml-3">
            <div>
              {token ? (
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/defaultAvatar.jpg"
                    alt="user"
                    width={32}
                    height={32}
                  />
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Đăng Nhập
                  </Link>
                  <Link
                    href="/signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Đăng Ký
                  </Link>
                </>
              )}
            </div>
            {isOpen && token && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-300"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Thông Tin Của Tôi
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-300"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-1"
                >
                  Chỉnh Sửa
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-300"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                  onClick={handleLogout}
                >
                  Đăng Xuất
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
