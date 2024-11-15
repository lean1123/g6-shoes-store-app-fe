function ListTopSaleProducts() {
  const scrollStyles = {
    maxHeight: '300px',
    overflowY: 'auto',
  };
  return (
    <div className="topSale-container " >
      <div className="flex justify-center items-center mt-5 style={scrollStyles}">
        <h1 className="text-4xl font-bold">Giày Sneaker</h1>
      </div>
      <div className="flex mt-4">
        <div className="w-1/5 bg-gray-200 p-4 bg-white">
          <div className="search-container flex flex-col items-start">
            <h1 className="font-bold mb-3">COLLECTION</h1>
            <button className="font-bold mb-3 text-s">Giày Sneaker Local</button>
            <button className="font-bold mb-3 text-s">Giày Sneaker Nam</button>
            <button className="font-bold mb-3 text-s">Giày Sneaker Nữ</button>
            <button className="font-bold mb-4 text-s">Giày Sneaker Trắng</button>
          </div>
          <div class="search-container mt-4 bg-white">
            <h1 class="font-bold mb-3">SIZE</h1>
            <div class="grid-container">
              <button class="size-btn">36</button>
              <button class="size-btn">37</button>
              <button class="size-btn">38</button>
              <button class="size-btn">39</button>
              <button class="size-btn">40</button>
              <button class="size-btn">41</button>
              <button class="size-btn">42</button>
              <button class="size-btn">43</button>
              <button class="size-btn">44</button>
              <button class="size-btn mb-4">45</button>
            </div>
          </div>
          <div className="search-container mt-4 bg-white flex flex-col items-start" style={scrollStyles}>
            <div style={{ position: 'absolute', backgroundColor: 'white' }}>
              <h1 className="font-bold mb-3">THƯƠNG HIỆU</h1>
            </div>
            <button className="ml-2 mb-2 mt-5">
              <img
                className="h-10 w-auto"
                src="/ThuongHieu/cros.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="ml-2 font-bold">
              Local Brand
            </button>
            <button className="mb-2">
              <img
                className="h-12 w-auto"
                src="/ThuongHieu/MLB.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </button>
            <button className="ml-2 font-bold">
              Nike Jordan
            </button>
            <button className="ml-2 font-bold mt-3">
              SaigonSneaker
            </button>
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
          <div className="search-container bg-white flex flex-col items-start mt-3" style={scrollStyles}>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#1C87BE] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-left text-sm">Xanh dương</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">7</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#1E68B2] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-sm">Xanh navy</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F0E68C] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-12">
                  <span className="font-bold text-sm ml-0 ">Khaki</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F4F0E3] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-sm">Trắng kem</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#28F7FF] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-5">
                  <span className="font-bold text-sm">Xanh Lam</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#5C5A33] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-6">
                  <span className="font-bold text-sm">Xanh rêu</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#B35B29] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Cam</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#000000] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Đen</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#B12929] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-16">
                  <span className="font-bold text-sm">Đỏ</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#F762BD] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-12">
                  <span className="font-bold text-sm">Hồng</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 transition-colors duration-300 group">
                <button className="bg-[#91541E] w-9 h-9 rounded-full mr-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                <div className="flex items-center space-x-14">
                  <span className="font-bold text-sm">Nâu</span>
                  <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold mt-4">NỔI BẬT</h1>
          </div>
          <div className="search-container bg-white flex flex-col items-start mt-3" style={scrollStyles}>
            <button className="font-bold mb-3 text-s">All Black</button>
            <button className="font-bold mb-3 text-s">All White</button>
            <button className="font-bold mb-3 text-s">Cổ cao</button>
            <button className="font-bold mb-3 text-s">Collab</button>
            <button className="font-bold mb-3 text-s">Đế cao  </button>
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
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 group">
              <div className="flex items-center space-x-20 mt-3">
                <span className="font-bold text-sm">500k-999k</span>
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 group mb-3">
              <div className="flex items-center space-x-20 mt-3">
                <span className="font-bold text-sm">Dưới 500k</span>
                <span className="text-black px-3 py-1 rounded-full border border-grey text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors duration-300">10</span>
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
        <div className="w-4/5 bg-gray-300 p-4">
          Phần bên phải
        </div>
      </div>
    </div>
  );
}

export default ListTopSaleProducts;
