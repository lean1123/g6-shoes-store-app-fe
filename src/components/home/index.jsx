import { Link } from "@mui/material";
import SliderBar from "./SliderBar";
import ListProduct from "../product/ListProduct";

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <SliderBar />
      </div>
      <div className="w-full">
        <p>Danh sách sản phẩm đã xem</p>
        <ListProduct />
        <Link href="/listRecentProducts" underline="none" color="textPrimary">
          Còn nhiều lắm, xem thêm
        </Link>
      </div>
      <div className="w-full">
        <p>Danh sách sản phẩm mới nhất</p>
        <ListProduct />
        <Link href="/listNewProducts" underline="none" color="textPrimary">
          Còn nhiều lắm, xem thêm
        </Link>
      </div>
      <div className="w-full">
        <p>Danh sách sản phẩm bán chạy</p>
        <ListProduct />
        <Link href="/listTopSaleProducts" underline="none" color="textPrimary">
          Còn nhiều lắm, xem thêm
        </Link>
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
