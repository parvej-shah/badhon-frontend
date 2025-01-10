import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import registerAnimation from "../assets/images/registerAnimation.json";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import OTPVerification from "./OTPVarification";
import RegistrationForm from "./RegistrationForm";
export default function RegisterPage() {
  const [step, setStep] = useState(1);
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
          toast.success("Register Successful!");
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
             { step==1 && (
               <>
               <h2 className="text-3xl font-bold text-primary text-center">Register</h2>
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
                <div className="form-control mt-3">
                  <button
                    type="button"
                    className="btn bg-secondary font-medium border-none text-white/90 hover:bg-secondary/10 hover:text-secondary hover:border hover:border-secondary"
                    onClick={() => {
                      setStep(2);
                      toast.success("OTP sent to your phone number");
                    }}
                  >
                    Send OTP
                  </button>
                </div>
              </form>
              </>
              )}
             { step==2 && (
              <>
              <OTPVerification setStep={setStep}/>
              </>
              )}
             { step==3 && (
              <>
              <RegistrationForm/>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
