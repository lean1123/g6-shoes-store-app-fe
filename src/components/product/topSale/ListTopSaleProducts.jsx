import ListProduct from "../ListProduct";

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

function ListTopSaleProducts() {
  const scrollStyles = {
    maxHeight: "300px",
    overflowY: "auto",
  };
  return (
    <div className="topSale-container ">
      <div className="flex justify-center items-center mt-5 style={scrollStyles}">
        <h1 className="text-4xl font-bold">Giày Sneaker</h1>
      </div>
      <div className="flex mt-4">
        <div className="w-1/5 bg-gray-200 ml-5 bg-white">
          <div className="search-container flex flex-col items-start">
            <h1 className="font-bold mb-3">COLLECTION</h1>
            <button className="font-bold mb-3 text-s">
              Giày Sneaker Local
            </button>
            <button className="font-bold mb-3 text-s">Giày Sneaker Nam</button>
            <button className="font-bold mb-3 text-s">Giày Sneaker Nữ</button>
            <button className="font-bold mb-4 text-s">
              Giày Sneaker Trắng
            </button>
          </div>
          <div className="search-container mt-4 bg-white">
            <h1 className="font-bold mb-3">SIZE</h1>
            <div className="grid-container">
              <button className="size-btn">36</button>
              <button className="size-btn">37</button>
              <button className="size-btn">38</button>
              <button className="size-btn">39</button>
              <button className="size-btn">40</button>
              <button className="size-btn">41</button>
              <button className="size-btn">42</button>
              <button className="size-btn">43</button>
              <button className="size-btn">44</button>
              <button className="size-btn mb-4">45</button>
            </div>
          </div>
          <div>
            <h1 className="font-bold mt-4 mb-3">THƯƠNG HIỆU</h1>
          </div>
          <div
            className="search-container bg-white flex flex-col items-start"
            style={scrollStyles}
          >
            <button className="ml-2 mb-2 mt-2">
              <img
                className="h-10 w-auto"
                src="/ThuongHieu/cros.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="ml-2 font-bold">Local Brand</button>
            <button className="mb-2">
              <img
                className="h-12 w-auto"
                src="/ThuongHieu/MLB.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="ml-2 font-bold">Nike Jordan</button>
            <button className="ml-2 font-bold mt-3">SaigonSneaker</button>
            <button className="p-3 mt-2">
              <img
                className="h-8 w-auto"
                src="/ThuongHieu/Adidas.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="p-2">
              <img
                className="h-10 w-auto ml-2"
                src="/ThuongHieu/NIKE.jpg"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="p-2">
              <img
                className="h-14 w-auto"
                src="/ThuongHieu/newbalence.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
          </div>
          <div>
            <h1 className="font-bold mt-4">MÀU SẮC</h1>
          </div>
          <div
            className="search-container bg-white flex flex-col items-start mt-3"
            style={scrollStyles}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#1C87BE] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-left text-sm">
                    Xanh dương
                  </span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    7
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#1E68B2] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-sm">Xanh navy</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F0E68C] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-12">
                  <span className="font-bold text-sm ml-0 ">Khaki</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F4F0E3] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-sm">Trắng kem</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#28F7FF] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-5">
                  <span className="font-bold text-sm">Xanh Lam</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#5C5A33] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-6">
                  <span className="font-bold text-sm">Xanh rêu</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#B35B29] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Cam</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#000000] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Đen</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#B12929] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-16">
                  <span className="font-bold text-sm">Đỏ</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F762BD] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-12">
                  <span className="font-bold text-sm">Hồng</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#91541E] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Nâu</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    10
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold mt-4">NỔI BẬT</h1>
          </div>
          <div
            className="search-container bg-white flex flex-col items-start mt-3"
            style={scrollStyles}
          >
            <button className="font-bold mb-3 text-s">All Black</button>
            <button className="font-bold mb-3 text-s">All White</button>
            <button className="font-bold mb-3 text-s">Cổ cao</button>
            <button className="font-bold mb-3 text-s">Collab</button>
            <button className="font-bold mb-3 text-s">Đế cao </button>
            <button className="font-bold mb-3 text-s">Limited</button>
            <button className="font-bold mb-3 text-s">Luxury brand</button>
            <button className="font-bold mb-3 text-s">Phản quang</button>
            <button className="font-bold mb-3 text-s">Retro</button>
            <button className="font-bold mb-3 text-s">Vintage</button>
            <button className="font-bold mb-3 text-s">Cổ thấp</button>
          </div>
          <div>
            <h1 className="font-bold mt-4">GIÁ</h1>
          </div>
          <div className="search-container">
            <div className=" flex flex-col space-y-2 group">
              <div className="flex items-center space-x-24 mt-3">
                <span className="font-bold text-sm">1tr - 2tr</span>
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  10
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 group">
              <div className="flex items-center space-x-20 mt-3">
                <span className="font-bold text-sm">500k-999k</span>
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  10
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 group mb-3">
              <div className="flex items-center space-x-20 mt-3">
                <span className="font-bold text-sm">Dưới 500k</span>
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  10
                </span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold mt-4">STOCK STATUS</h1>
          </div>
          <div className=" pt-6 flex   items-center">
            <input
              type="checkbox"
              id="subscribe-checkbox"
              className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            ></input>
            <label
              htmlFor="subscribe-checkbox"
              className="text-sm font-medium text-gray-700"
            >
              On sale
            </label>
          </div>
        </div>
        <div className="w-4/5">
          <div className="flex justify-between">
            <div>
              <button className="font-bold text-sm">Trang chủ</button>
              <text className="ml-1 mr-1">/</text>
              <button className="font-bold text-sm">Giày Sneaker</button>
            </div>
            <div className=" search-container mr-3">
              <select className="w-full border no-border py-1 px-10 input-field font-bold">
                <option value="banChay" className="font-bold">
                  Bán chạy
                </option>
                <option value="moiNhat" className="font-bold">
                  Mới nhất
                </option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-start justify-start">
              <ListProduct items={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTopSaleProducts;
