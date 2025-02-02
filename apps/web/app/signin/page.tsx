import React from "react";
import Input from "../components/input/Input";

function signin() {
  return (
    <div className="h-screen w-full flex justify-between ">
      <div className="w-full md:w-2/5 bg-white p-8 shadow-lg rounded-lg flex flex-col ">
        <div className="text-5xl font-bold mb-10 text-center">
          <h1>Sign In</h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="w-[60%] flex items-center justify-center gap-2 bg-gray-100 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-200 transition duration-300 cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Google</span>
          </button>
        </div>
        <div className="my-4 text-gray-500 text-center">
          Or sign in with your email:
        </div>
        <div>
          <form className="space-y-4">
            <Input lable="Email" placeholder="Email Address" type="text" />

            <Input lable="Password" placeholder="Password" type="password" />

            <div className="flex justify-center items-center mt-10">
              <button className="w-[60%]  bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-md font-semibold cursor-pointer">
                Sign up for FREE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[60%] h-screen bg-[linear-gradient(157deg,#240342_0%,#b55dcd_100%)] text-white">
        <div className="flex justify-end text-4xl my-7 mr-10 font-extrabold">
          <h1>FA</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-6xl/tight font-bold max-w-2xl my-12 text-center">
            <h1>
              {" "}
              Build systems{" "}
              <span className="text-[#ea33f7]">#withFlowAutomation</span>
            </h1>
          </div>
          <div className="text-center text-xl font-semibold max-w-2xl mb-5">
            <h3>
              From tasks and workflows to apps and systems, build and automate
              anything in one powerful visual platform.
            </h3>
          </div>
          <div className="text-center text-xl font-semibold max-w-2xl mt-5">
            <h3>Trusted by 500 000+ Makers | Free forever</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signin;
