import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-full h-[25rem] w-[25rem] flex justify-center">
        <form className="flex flex-col gap-4" onSubmit={() => navigate("home")}>
          <img
            src="https://www.webfx.com/wp-content/uploads/2021/10/iStock-811702444-1024x1024.jpg"
            alt="img"
            width="200px"
            draggable="false"
            className="mx-auto rounded-lg"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white text-black p-2
            rounded-lg "
            required
          />
          <input
            type="text"
            placeholder="Your Password"
            className="bg-white text-black p-2
            rounded-lg"
            required
          />
          <button className="rounded-lg bg-cyan-50 text-black w-[5rem] mx-auto p-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
