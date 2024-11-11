import { useDispatch } from "react-redux";
import LoginForm from "../../components/auth/LoginForm";
import { login } from "../../hooks/auth/authSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const handleOnSubmit = async (values) => {
    try {
      const action = login(values);
      const result = await dispatch(action);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-col items-start">
      <div>
        <h2 className="font-bold text-lg text-gray-600">Đăng Nhập</h2>
      </div>

      <div>
        <LoginForm onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export default LoginPage;
