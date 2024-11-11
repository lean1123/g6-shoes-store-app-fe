import { Route, Routes } from "react-router";
import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Home from "./components/common/home";
import ProductDetail from "./components/product/detail";
import ListProduct from "./components/product/ListProduct";
import SignUpForm from "./components/auth/SignUpForm";
import NewProduct from "./components/product/new";
import ListReview from "./components/review/ListReview";

function App() {
  const role = "customer";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        {role !== "admin" ? (
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<ListProduct />} />
              <Route path="new" element={<NewProduct />} />
              <Route path=":id" element={<ProductDetail />}>
                <Route path="reviews" element={<ListReview />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        ) : (
          <h1>Admin</h1>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
