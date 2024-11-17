import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "@mui/material";
import { Outlet, useParams } from "react-router";
import "./Style.css";
import SubProductDetail from "./SubProductDetail";
function ProductDetail() {
  const params = useParams();

  return (
    <div className="grid grid-cols-2 my-6 font-calibri">
      <div className="flex flex-row justify-center">
        <div className="flex-col h-96 overflow-auto scrollbar-hidden p-2 mr-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <img
              key={index + 1}
              className="w-20 mb-4 border rounded-lg"
              src="/logo.png"
              alt="product"
            />
          ))}
        </div>
        <div className="border rounded-lg w-96 h-96 object-cover p-2">
          <img className="w-full h-full" src="/logo.png" alt="product avatar" />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Tên Sản Phẩm ABC0009</h2>
        <div className="w-full flex justify-start mb-4">
          <p className="text-lg mr-10 font-semibold text-orange-600">
            1.000.000 VND
          </p>
          <p className="text-lg text-orange-600">Tình trạng còn hàng: (29)</p>
        </div>
        <div className="flex justify-start mb-4">
          <p className="text-base font-bold mr-2">Chọn màu:</p>
          <div className="flex justify-start">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                src="/logo.png"
                alt="mau"
                className="w-14 mr-2 border py-2 border-orange-600"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-start mb-4">
          <p className="text-base font-bold mr-2">Chọn size:</p>
          <div className="flex justify-start">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                src="/logo.png"
                alt="mau"
                className="w-14 mr-2 border py-2 flex justify-center items-center  border-orange-600"
              >
                {index}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8 text-base text-slate-800 ml-24">
          <Link href="/products/1" color="textPrimary">
            Hướng dẫn chọn size
          </Link>
        </div>
        <div className="flex justify-start ml-24 mb-10">
          <button className="bg-orange-600 px-8 py-2 font-bold hover:bg-slate-950 hover:text-sky-50">
            THÊM VÀO GIỎ HÀNG
          </button>
          <div className="px-8 py-2 font-bold border w-30 text-orange-600 border-orange-600">
            <FavoriteBorderIcon />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-3/4 flex justify-between items-center border-t border-gray-800 py-2">
            <SubProductDetail
              title="Mô tả sản phẩm"
              path={`/products/${params.id}/description`}
            />
          </div>
          <div className="w-3/4 flex justify-between items-center border-t border-gray-800 py-2">
            <SubProductDetail
              title="Thông tin bảo hành"
              path={`/products/${params.id}/warrantyPolicy`}
            />
          </div>
          <div className="w-3/4 flex justify-between items-center border-t border-gray-800 py-2">
            <SubProductDetail
              title="Chính sách đổi trả"
              path={`/products/${params.id}/returnPolicy`}
            />
          </div>
          <div className="w-3/4 flex justify-between items-center border-t border-gray-800 py-2">
            <SubProductDetail
              title="Reviews"
              path={`/products/${params.id}/reviews`}
            />
          </div>
        </div>
      </div>
      <Outlet />
      <div className="w-full">
        <p>Danh sách sản phẩm cùng dòng</p>
      </div>
    </div>
  );
}

export default ProductDetail;
