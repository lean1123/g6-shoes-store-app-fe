import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { login } from "../../hooks/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
    <form
      className="flex-col items-start"
      onSubmit={form.handleSubmit(handleOnSubmit)}
    >
      <div className="w-full mb-2">
        <label htmlFor="email" className="mr-2">
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
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
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
      <div>
        <button type="submit" className="py-2 px-8 bg-slate-500">
          Đăng Nhập
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
