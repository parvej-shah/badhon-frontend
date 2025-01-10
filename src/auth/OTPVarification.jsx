import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const OTPVerification = ({setStep}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
// Function to handle form submission
  const onSubmit = (data) => {
    const otp = `${data.digit1}${data.digit2}${data.digit3}${data.digit4}`;
    console.log("OTP Entered:", otp);
    toast.success(`OTP Verified: ${otp}`);
    // increasing the step to take to the next step
    setStep(3);
  };

  // Function to handle input focus shift
  const handleInputChange = (e, nextInputId) => {
    if (e.target.value.length === 1 && nextInputId) {
      document.getElementById(nextInputId).focus();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">OTP Verification</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the 4-digit OTP sent to your registered email or phone.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="flex space-x-3 mb-4">
            {/* OTP Input Fields */}
            {["digit1", "digit2", "digit3", "digit4"].map((field, index) => (
              <input
                key={field}
                id={field}
                type="text"
                maxLength={1}
                className={`input input-bordered w-12 h-12 text-center text-xl font-bold ${
                  errors[field] ? "input-error" : ""
                }`}
                {...register(field, {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Only numbers are allowed",
                  },
                })}
                onChange={(e) => handleInputChange(e, `digit${index + 2}`)}
              />
            ))}
          </div>
          {/* Error Message */}
          <div className="text-red-500 text-center mb-4">
            {(errors.digit1 || errors.digit2 || errors.digit3 || errors.digit4) && (
              <span>All fields must be filled with valid numbers.</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
