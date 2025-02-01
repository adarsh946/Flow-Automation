import React from "react";

function signup() {
  return (
    <div className="h-screen w-full flex justify-between ">
      <div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div></div>
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

export default signup;
