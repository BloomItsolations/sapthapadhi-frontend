import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../store/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    if (!phone && !password) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "error occured while registering user. Please try again later.",
            });
      return;
    }
    dispatch(updatePassword({ phone, newPassword: password })).then((res) => {
      if (!res.error) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: res.payload,
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.payload,
        });
      }
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-purple-100">
        <div className="max-w-md w-full space-y-8 shadow-lg bg-gray-50 rounded-lg px-12 py-12">
          <div>
            <h2 className=" text-center text-3xl my-4 font-bold text-[#5e17eb]">
              Reset Password
            </h2>
          </div>
          <form className="mt space-y-4" onSubmit={formHandler}>
            <div className="rounded-md shadow-sm">
              <input
                id="phone"
                name="phone"
                type="text"
                className="relative rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#5e17eb] focus:border-[#5e17eb] focus:z-10 sm:text-sm"
                placeholder="Mobile Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                className="relative rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#5e17eb] focus:border-[#5e17eb] focus:z-10 sm:text-sm"
                placeholder="Enter New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="group relative leading-none w-full flex justify-center py-3 px-4 border border-transparent text-xl font-semibold rounded-md text-white bg-[#5e17eb] hover:bg-[#5e17eb] focus:bg-[#5e17eb] hover:text-black"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
