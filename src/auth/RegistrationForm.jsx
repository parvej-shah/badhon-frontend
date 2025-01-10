import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast("Registration Successful!");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Donor Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <>
              {/* Page 1 Fields */}
              <div className="form-control mb-0">
                <label className="label font-bold">Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">Blood Group</label>
                <select
                  className="select select-bordered"
                  {...register("bloodGroup", { required: "Blood group is required" })}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                {errors.bloodGroup && (
                  <span className="text-red-500">{errors.bloodGroup.message}</span>
                )}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">University</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter your universtiy name"
                  {...register("university", { required: "University is required" })}
                />
                {errors.university && (
                  <span className="text-red-500">{errors.university.message}</span>
                )}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">Department</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your department name"
                  {...register("department", { required: "Department is required" })}
                />
                {errors.department && (
                  <span className="text-red-500">{errors.department.message}</span>
                )}
              </div>
              
              <div className="flex justify-end mt-4">
              <button
                type="button"
                className="btn bg-secondary text-gray-50 btn-sm"
                onClick={() => setStep(2)}
              >
                Next
              </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              {/* Page 1 Fields */}
              <div className="form-control mb-0">
                <label className="label font-bold">Session</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your university session"
                  {...register("session", { required: "Session is required" })}
                />
                {errors.session && <span className="text-red-500">{errors.session.message}</span>}
              </div>
              <div className="form-control mb-0">
                <label className="label font-bold">Hall Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your hall name"
                  {...register("hall", { required: "Hall is required" })}
                />
                {errors.hall && <span className="text-red-500">{errors.hall.message}</span>}
              </div>
              <div className="form-control mb-0">
                <label className="label font-bold">Area</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter your address area"
                  {...register("area", { required: "Area is required" })}
                />
                {errors.area && <span className="text-red-500">{errors.area.message}</span>}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">Phone Number</label>
                <input
                  type="tel"
                  className="input input-bordered"
                  placeholder="Enter your active phone number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">{errors.phoneNumber.message}</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-4 ">
              <button
                  type="button"
                  className="btn bg-primary btn-sm"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
              <button
                type="button"
                className="btn bg-secondary text-gray-50 btn-sm"
                onClick={() => setStep(3)}
              >
                Next
              </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {/* Page 2 Fields */}
              <div className="form-control mb-0">
                <label className="label font-bold">Last Blood Donation Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  placeholder="Enter your last donation date"
                  {...register("lastDonationDate" ,{required: "Last donation date is required"})}
                />
                {errors.lastDonationDate && <span className="text-red-500">{errors.lastDonationDate.message}</span>}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">Weight (kg)</label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="Wieght in kg"
                  {...register("weight", {
                    required: "Weight is required",
                    min: { value: 45, message: "Weight must be at least 45kg" },
                  })}
                />
                {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">Common Health Problems</label>
                <select
                  className="select select-bordered"
                  {...register("healthProblems")}
                >
                  <option value="">Select a problem</option>
                  <option value="None">None</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Hypertension">Hypertension</option>
                  <option value="Anemia">Anemia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-control mb-0">
                <label className="label font-bold">University Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Enter your university email"
                  {...register("email", {
                    required: "University email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@.+\..+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="btn bg-primary btn-sm"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button type="submit" className="btn bg-secondary text-gray-50 btn-sm">
                  Submit
                </button>
              </div>
            </>
          )}
          <progress className="progress progress-success w-full bg-primary" value={step*(100/3)} max="100"></progress>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
