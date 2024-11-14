import { Link } from "@mui/material";
import SliderBar from "./SliderBar";
import ListProduct from "../product/ListProduct";
import { useState } from "react";

function HomePage() {
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
      name: "Giày Thể Thao Nam HST034",
      sizes: [39, 40, 41, 42],
      colors: ["Đen", "Trắng", "Xanh Lá"],
      price: 950000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 5,
      name: "Giày Thể Thao Nữ HSN002",
      sizes: [36, 37, 38, 39],
      colors: ["Hồng", "Trắng", "Xám"],
      price: 700000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 6,
      name: "Giày Bóng Chuyền HSB022",
      sizes: [39, 40, 41, 42],
      colors: ["Xanh Dương", "Đỏ"],
      price: 1300000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 7,
      name: "Giày Lười Nam HSL004",
      sizes: [40, 41, 42, 43],
      colors: ["Đen", "Nâu"],
      price: 600000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 8,
      name: "Giày Sneakers Nữ HSN009",
      sizes: [36, 37, 38, 39],
      colors: ["Trắng", "Đen", "Hồng"],
      price: 850000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 9,
      name: "Giày Sandal Nam HSN010",
      sizes: [40, 41, 42],
      colors: ["Nâu", "Đen"],
      price: 450000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 10,
      name: "Giày Thể Thao Nam HSM017",
      sizes: [38, 39, 40, 41, 42],
      colors: ["Xanh Dương", "Trắng", "Đen"],
      price: 990000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 11,
      name: "Giày Boot Nam HSB008",
      sizes: [41, 42, 43],
      colors: ["Đen", "Nâu"],
      price: 1500000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 12,
      name: "Giày Sneaker Nam HSN013",
      sizes: [39, 40, 41, 42],
      colors: ["Trắng", "Xám", "Đen"],
      price: 800000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 13,
      name: "Giày Slip-On Nữ HSN014",
      sizes: [36, 37, 38, 39],
      colors: ["Đen", "Trắng", "Be"],
      price: 650000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 14,
      name: "Giày Running Nam HSR019",
      sizes: [40, 41, 42],
      colors: ["Đỏ", "Trắng", "Xám"],
      price: 1200000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
    {
      id: 15,
      name: "Giày Thể Thao Nữ HSN022",
      sizes: [36, 37, 38, 39],
      colors: ["Hồng", "Trắng", "Xanh Dương"],
      price: 750000,
      image:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-1_b344b11091f4434b80d6af039c9faf21_large.jpg",
      hoverImage:
        "https://product.hstatic.net/1000230642/product/hsm007801trg-7_8ebdf3e9450842b1a206db19b02f28e3_large.jpg",
    },
  ];

  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {isVisible && (
        <div className="w-full flex flex-col items-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-0 m-0 rounded-lg shadow-lg max-w-lg w-full">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => closePopup()}
              >
                ✖
              </button>
              <img
                src="/public/banner/banner.png"
                alt="Popup Image"
                className="rounded-lg object-cover w-full h-full"
              />
              <Link
                className="absolute inset-0 flex items-end justify-center "
                href="/login"
                underline="none"
              >
                <p className="italic bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg text-center font-medium ">
                  Khám Phá Ngay
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <SliderBar />
      </div>
      <div className="w-full flex flex-col items-center my-5">
        <p className="text-3xl text-black font-sans font-bold ">
          Danh sách sản phẩm đã xem
        </p>
        <ListProduct items={data} />
        <Link href="/listRecentProducts" underline="none" color="textPrimary">
          <p className="text-3xl text-black font-sans font-bold ">
            Còn nhiều lắm , con cặt thanh an
          </p>
        </Link>
      </div>
      <div className="w-full">
        <p>Danh sách sản phẩm mới nhất</p>
        <ListProduct items={data} />
        <Link href="/listNewProducts" underline="none" color="textPrimary">
          Còn nhiều lắm, xem thêm
        </Link>
      </div>
      <div className="w-full">
        <p>Danh sách sản phẩm bán chạy</p>
        <ListProduct items={data} />
        <Link href="/listTopSaleProducts" underline="none" color="textPrimary">
          Còn nhiều lắm, xem thêm
        </Link>
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
