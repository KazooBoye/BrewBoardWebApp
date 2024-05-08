import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* register container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">
              Join BrewBoard
            </h2>
            {/* form */}
            <form className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <button
                className="bg-[#bd9a3c] text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
