import { Outlet } from "react-router";

function ProductPage() {
  return (
    <div>
      <h1>ProductPage</h1>
      <Outlet />
    </div>
  );
}

export default ProductPage;
