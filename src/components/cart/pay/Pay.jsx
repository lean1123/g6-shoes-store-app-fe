import { useState, useEffect } from "react";
import {
  LoadingOutlined,
  MoneyCollectOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { orange } from "@mui/material/colors";

const Pay = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isExpanded, setIsExpanded] = useState(false);
  const data = [
    {
      id: 1,
      name: "Giày Sneaker Nam HSM007801TRG",
      sizes: [38, 39, 40, 41, 42, 43],
      colors: ["Đỏ", "Trắng", "Xám"],
      price: 850000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 2,
      name: "Giày Boot Nữ HSB001HSM007801TRG",
      sizes: [36, 37, 38, 39, 40],
      colors: ["Đen", "Nâu", "Be"],
      price: 1200000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 3,
      name: "Giày Bóng Rổ HSB032",
      sizes: [40, 41, 42, 43],
      colors: ["Xanh Dương", "Trắng"],
      price: 1500000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 4,
      name: "Giày Bóng Rổ HSB032",
      sizes: [40, 41, 42, 43],
      colors: ["Xanh Dương", "Trắng"],
      price: 1500000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 5,
      name: "Giày Bóng Rổ HSB032",
      sizes: [40, 41, 42, 43],
      colors: ["Xanh Dương", "Trắng"],
      price: 1500000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
  ];
  const coupons = [
    {
      code: "T1124SALE120KM",
      expiry: "30/11/2024",
      discount: "Giảm 120,000₫ giá trị đơn hàng",
      minimumOrder: "Mua tối thiểu 990,000₫",
      price: 120000,
    },
    {
      code: "T1124SALE80KM",
      expiry: "30/11/2024",
      discount: "Giảm 80,000₫ giá trị đơn hàng",
      minimumOrder: "Mua tối thiểu 699,000₫",
      price: 80000,
    },
    {
      code: "FREESHIP",
      expiry: "31/12/2024",
      discount: "Miễn phí vận chuyển",
      minimumOrder: "Mua tối thiểu 200,000₫",
    },
    {
      code: "NEWUSER10",
      expiry: "01/01/2025",
      discount: "Giảm 10% cho khách hàng mới",
      minimumOrder: "Mua tối thiểu 300,000₫",
    },
    {
      code: "VIP50OFF",
      expiry: "31/12/2024",
      discount: "Giảm 50,000₫ cho đơn hàng bất kỳ",
      minimumOrder: "Không yêu cầu đơn tối thiểu",
      price: 50000,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    async function fetchProvinces() {
      try {
        const response = await fetch(
          "https://provinces.open-api.vn/api/p?depth=1"
        );
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tỉnh/thành:", error);
      }
    }
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      async function fetchDistricts() {
        try {
          const response = await fetch(
            `https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`
          );
          const data = await response.json();
          setDistricts(data.districts);
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu huyện/quận:", error);
        }
      }
      fetchDistricts();
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      async function fetchWards() {
        try {
          const response = await fetch(
            `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
          );
          const data = await response.json();
          setWards(data.wards);
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu phường/xã:", error);
        }
      }
      fetchWards();
    }
  }, [selectedDistrict]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (data.length > 2) {
      setIsShow(true);
    }
  }, []);
  const [voucher, setVoucher] = useState({ code: "", price: 0 });
  const [total, setTotal] = useState(
    data.reduce((acc, item) => acc + item.price, 0).toLocaleString()
  );
  const solveTotal = () => {
    let total = data.reduce((acc, item) => acc + item.price, 0);
    if (voucher.price) {
      total -= voucher.price;
    }
    setTotal(total.toLocaleString());
  };
  return (
    <div className="w-full flex justify-between">
      <div id="left" className="w-1/2 px-5 pt-10 flex flex-col">
        <img
          src="../../../public/logo/logo.ico"
          alt="logo"
          className="h-20 w-20"
        />
        <div className="flex justify-start py-2">
          <Link to="/cart">
            <p className="text-black text-sm">Giỏ hàng</p>
          </Link>
          <RightOutlined className="mx-1 text-sm" />
          <p className="text-stone-700 text-sm">Thông tin giao hàng</p>
          <RightOutlined className="mx-1 text-sm" />
          <p className="text-stone-500 text-sm">Phương thức thanh toán</p>
        </div>
        <div className="flex flex-row justify-between items-center py-2">
          <div>
            <LoadingOutlined />
          </div>
          <strong className="ml-1">
            Sản phẩm trong giỏ hàng của bạn đang được nhiều người mua. Đừng lo
            anh Thịnh đã giữ chỗ cho mấy em để không bị hết hàng khi thanh toán.
          </strong>
        </div>
        <p
          className="px-3 py-1 bg-orange-200 rounded-lg"
          style={{
            borderWidth: 1,
            borderColor: orange[500],
            borderStyle: "solid",
          }}
        >
          Đơn hàng của bạn đang được giữ chỗ thêm {formatTime(timeLeft)} phút!
        </p>
        <form action="/cart">
          <label className="text-2xl font-bold py-2">Thông tin giao hàng</label>
          <br />
          <label className="text-stone-300 mr-2">Bạn đã có tài khoản? </label>
          <Link to="/login">
            <button>Đăng nhập</button>
          </Link>
          <br />
          <input
            type="text"
            placeholder="Họ và tên"
            className="h-10 w-full rounded-lg my-2 px-3 border border-gray-300 focus:border-blue-500"
            name="name"
          />
          <br />
          <div className="flex">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="h-10 w-1/3 rounded-lg my-2 px-3 mr-2 border border-gray-300 focus:border-blue-500"
              name="phone"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-2/3 rounded-lg my-2 px-3 border border-gray-300 focus:border-blue-500"
              name="email"
            />
          </div>

          <input
            type="text"
            placeholder="Địa chỉ"
            className="h-10 w-full rounded-lg my-2 px-3 border border-gray-300 focus:border-blue-500"
            name="address"
          />
          <br />

          <div className="flex justify-around my-2">
            <select
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDistrict("");
                setWards([]);
              }}
              className="h-10 basis-1/3 rounded-lg border border-gray-300 focus:border-blue-500"
            >
              <option>Chọn tỉnh / thành</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>

            <select
              className="h-10 basis-1/3 ml-2 rounded-lg border border-gray-300 focus:border-blue-500"
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setSelectedWard("");
              }}
            >
              <option>Chọn huyện / quận</option>
              {selectedProvince &&
                districts.map((district) => (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                ))}
            </select>

            <select
              className="h-10 basis-1/3 ml-2 rounded-lg border border-gray-300 focus:border-blue-500"
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
            >
              <option>Chọn phường / xã</option>
              {selectedDistrict &&
                wards.map((ward) => (
                  <option key={ward.code} value={ward.code}>
                    {ward.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex items-center justify-between py-1">
            <Link to="/cart">
              <strong className="mr-2 ">Giỏ hàng</strong>
            </Link>
            <input
              type="submit"
              value="Tiếp tục đến phương thức thanh toán"
              className="h-10 bg-red-500 rounded-lg text-white w-2/4 my-2"
            />
          </div>
        </form>
        <hr className="mt-10 mb-2 text-grey-300" />
        <div className="flex flex-col h-full justify-end text-center">
          <div className="border-1"></div>
          <p className="text-2xl text-stone-300">Power by github huynnthinh</p>
        </div>
      </div>
      <div id="right" className="w-1/2 bg-stone-100 pt-10 px-10">
        <div
          id="items"
          className={`${isExpanded ? "h-fit" : "h-60"} overflow-y-scroll`}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg mr-2"
                />
                <div>
                  <p>{item.name}</p>
                  <div className="flex">
                    <p className="text-stone-500">{item.colors[0]} / </p>
                    <p className="text-stone-500 ml-1"> {item.sizes[0]} / </p>
                    <p className="text-stone-500 ml-1">{item.id}</p>
                  </div>
                </div>
              </div>
              <div>
                <p>{item.price.toLocaleString()}đ</p>
                <p className="text-stone-500">x1</p>
              </div>
            </div>
          ))}
        </div>
        {isShow && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 font-bold hover:text-stone-300  p-2 w-full"
          >
            {isExpanded ? "Thu gọn" : "Xem tất cả"}
          </button>
        )}
        <div className="border-1 my-3"></div>
        <div className="flex items-center my-3 ">
          <p>Chọn loại voucher: </p>
          <select className="pl-2 bg-stone-100 ml-3 h-10 rounded-lg border border-grey-300 focus:border-blue-500 w-1/4">
            <option>Khuyến mãi</option>
            <option>Phiếu quà tặng</option>
            <option>Voucher UrBox</option>
          </select>
        </div>
        <div className="flex mb-3">
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="h-10 px-2 rounded-lg basis-3/4"
            value={voucher?.code}
          />
          <button
            className="ml-5 h-10 bg-red-500 text-white rounded-lg basis-1/4"
            onClick={() => {
              solveTotal();
            }}
          >
            Áp dụng
          </button>
        </div>

        <div className="flex">
          <button className="items-center" onClick={openPopup}>
            <div className="flex">
              <MoneyCollectOutlined className="text-red mr-2" />
              <p className="text-blue-300"> Xem thêm mã giảm giá</p>
            </div>
            <img src="../../../../public/voucher.png" alt="voucher" />
          </button>
          {isPopupOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
                <button
                  onClick={closePopup}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
                <h2 className="text-lg font-semibold mb-4">Chọn giảm giá</h2>
                <p className="text-gray-500 mb-2">Mã giảm giá của shop</p>

                <div className="space-y-4 max-h-[300px] overflow-y-auto">
                  {coupons.map((coupon, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">{coupon.code}</p>
                        <p className="text-sm text-gray-500">
                          HSD: {coupon.expiry}
                        </p>
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                          <li>{coupon.discount}</li>
                          <li>{coupon.minimumOrder}</li>
                        </ul>
                      </div>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => {
                          setVoucher(coupon);
                          closePopup();
                        }}
                      >
                        Chọn
                      </button>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Coupon không dùng chung với chương trình khuyến mãi, quà tặng.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border-1 my-3"></div>
        <div className="flex justify-between px-5">
          <p>Tạm tính</p>
          <p>
            {data.reduce((acc, item) => acc + item.price, 0).toLocaleString()}đ
          </p>
        </div>
        <div className="flex justify-between px-5">
          <p>Phí vận chuyển</p>
          <p>-</p>
        </div>
        <div className="flex justify-between px-5">
          <p>Giảm giá</p>
          <p className="">
            {voucher.price ? voucher.price.toLocaleString() : 0}đ
          </p>
        </div>
        <div className="border-1 my-3"></div>
        <div className="flex justify-between items-center px-5">
          <p className="font-bold text-xl">Tổng cộng</p>
          <p className="font-bold text-xl">{total}đ</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="border-1 flex-grow"></div>
          <p className="px-2 bg-stone-300 rounded-lg font-normal">
            Lý do Cô cho chúng em 10 điểm
          </p>
          <div className="border-1 flex-grow"></div>
        </div>
        <div className="mt-4">
          <div className="flex">
            <img
              src="../../../../public/vanchuyen.png"
              alt="vanchuyen"
              className="mr-2 "
            />
            <p>
              <strong>
                Hơn 800.000 đơn hàng được Thịnh vận chuyển đến tay khách hàng
                thành công.
              </strong>
              <br />
              Thịnh luôn làm đảm bảo khách hàng hài lòng khi nhận sản phẩm. Bạn
              chỉ cần đặt hàng giao hàng hãy để đội ngũ Thịnh lo.
            </p>
          </div>
          <div className="flex mt-3">
            <img
              src="../../../../public/loop.png"
              className="mr-2"
              alt="loop"
            />
            <p>
              <strong>
                Đổi trả hàng dễ dàng trong 30 ngày với sản phẩm không hài lòng.
              </strong>
              <br />
              Thịnh cam kết đổi trả hàng dễ dàng trong 30 ngày nếu sản phẩm
              không hài lòng. Bạn chỉ cần liên hệ với Thịnh qua hotline hoặc
              email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
