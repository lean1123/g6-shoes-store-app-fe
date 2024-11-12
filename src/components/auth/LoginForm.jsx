import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { login } from "../../hooks/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "@mui/material";

LoginForm.propTypes = {};

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    try {
      const action = login(values);
      const result = dispatch(action);
      console.log("result: ", result);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="p-10 my-20">
      <h2 className="text-2xl font-bold text-center mb-10">Đăng Nhập</h2>
      <form
        className=" flex flex-col items-center"
        onSubmit={form.handleSubmit(handleOnSubmit)}
      >
        <div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <input
              className="border rounded-md py-2 px-10"
              type="email"
              id="email"
              name="email"
              placeholder="Vui lòng nhập email của bạn"
              {...form.register("email")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Vui lòng nhập mật khẩu của bạn"
              className="border rounded-md py-2 px-10"
              {...form.register("password")}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-8 bg-orange-600 rounded-md text-base font-semibold hover:bg-gray-950 hover:text-sky-50"
          >
            Đăng Nhập
          </button>
        </div>
        <div className="mt-10">
          <p>
            Bạn chưa có tài khoản?{" "}
            <Link
              href="/signup"
              className="hover:cursor-pointer hover:text-orange-600"
              color="textPrimary"
              underline="none"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
