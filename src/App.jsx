import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/common/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import ProductPage from "./pages/product";
import ProductDetail from "./pages/product/detail";
import NewProduct from "./pages/product/new";

function App() {
  const role = "customer";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {role !== "admin" ? (
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="products/new" element={<NewProduct />} />
            <Route path="products/:id" element={<ProductDetail />} />
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
