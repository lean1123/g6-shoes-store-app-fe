import { Outlet } from "react-router";

function ProductDetail() {
  return (
    <div>
      <h2>ProductDetail</h2>
      <h4>List review of product</h4>
      <Outlet />
    </div>
  );
}

export default ProductDetail;
