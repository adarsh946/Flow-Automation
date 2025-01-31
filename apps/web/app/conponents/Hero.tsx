import React from "react";
import Button from "./buttons/Button";
import Gbuttton from "./buttons/Gbuttton";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex justify-between items-center mt-5">
      <div className="flex flex-col ">
        <div className=" flex font-extrabold text-7xl text-[#201515] my-2">
          <h1>Automate without limits</h1>
        </div>
        <div className="  text-xl  ">
          <p>
            Turn chaos into smooth operations by automating workflows
            yourself—no developers, no IT tickets, no delays. The only limit is
            your imagination.
          </p>
        </div>
        <div className="flex gap-4 mt-10">
          <div className="">
            <Button>Start free with email</Button>
          </div>
          <div>
            <Gbuttton>Start free with Google</Gbuttton>
          </div>
        </div>
      </div>
      <div className="w-full object-contain overflow-hidden  ">
        <img
          src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
          alt="workflow"
        />
      </div>
    </section>
  );
}

export default Hero;
