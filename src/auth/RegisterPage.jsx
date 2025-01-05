import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import registerAnimation from "../assets/images/registerAnimation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from;
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const onSubmit = (data) => {
    const {phone, password } = data;
          toast.success("Login Successful!");
          navigate(from || '/');
  };
  return (
    <div className="py-10 bg-bgEnd px-4 ">
      <div className="text-textPrimary">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerAnimation} />
          </div>
          <div className="card bg-bgStart w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-primary text-center">Register</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-control">
                  <label className="input input-bordered flex items-center gap-2 bg-bgEnd">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="input input-bordered flex items-center bg-bgEnd  gap-2">
                    <input
                      type="password"
                      className="grow"
                      placeholder="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </label>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                  <label className="label">
                    <p className="text-textPrimary text-sm">
                      Have an acount?
                      <Link
                        to={"/register"}
                        className="link font-medium link-hover"
                      >
                        Login
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button
                    type="submit"
                    className="btn bg-secondary font-medium border-none text-white/90 hover:bg-secondary/10 hover:text-secondary hover:border hover:border-secondary"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
