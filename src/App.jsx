import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/home";
import DescriptionInfo from "./components/product/detail/DescriptionInfo";
import ProductDetail from "./components/product/detail/ProductDetail";
import ReturnPolicy from "./components/product/detail/ReturnPolicy";
import WarrantyPolicy from "./components/product/detail/WarrantyPolicy";
import ListAllProducts from "./components/product/ListAllProducts";
import ListNewProducts from "./components/product/new/ListNewProducts";
import ListRecentProducts from "./components/product/recent/ListRecentProducts";
import ListReview from "./components/product/review/ListReview";
import ListTopSaleProducts from "./components/product/topSale/ListTopSaleProducts";
import Cart from "./components/cart";
import Pay from "./components/cart/pay/Pay";

function App() {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const role = "customer";

  return (
    <div className="App">
      {/* Kiểm tra đường dẫn, ẩn Header và Footer nếu ở trang cart hoặc cart/pay */}
      {location.pathname !== "/cart" && location.pathname !== "/cart/pay" && (
        <Header />
      )}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        {role !== "admin" ? (
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="listNewProducts" element={<ListNewProducts />} />
            <Route path="listRecentProducts" element={<ListRecentProducts />} />
            <Route
              path="listTopSaleProducts"
              element={<ListTopSaleProducts />}
            />
            <Route path="products">
              <Route index element={<ListAllProducts />} />
              <Route path=":id" element={<ProductDetail />}>
                <Route path="description" element={<DescriptionInfo />} />
                <Route path="reviews" element={<ListReview />} />
                <Route path="warrantyPolicy" element={<WarrantyPolicy />} />
                <Route path="returnPolicy" element={<ReturnPolicy />} />
              </Route>
            </Route>
            <Route path="post" element={<h1>Post</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        ) : (
          <h1>Admin</h1>
        )}
        <Route path="cart" element={<Cart />} />
        <Route path="cart/pay" element={<Pay />} />
      </Routes>
      {location.pathname !== "/cart" && location.pathname !== "/cart/pay" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
