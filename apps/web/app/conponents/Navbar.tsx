"use client";

import React, { useState } from "react";
import Button from "./buttons/Button";

function Navbar() {
  return (
    <nav className=" px-6 py-4">
      <div className="flex justify-between  items-center  max-w-7xl mx-auto">
        <div className="font-bold text-4xl ml-20 ">
          <h1>FA</h1>
        </div>
        <ul className="flex space-x-6 text-[#413735]  cursor-pointer items-center">
          <li className="hover:bg-[#f5f3eb] hover:rounded hover:p-1">
            What is FA
          </li>
          <li className="hover:bg-[#f5f3eb] hover:rounded hover:p-1">
            Solutions
          </li>
          <li className="hover:bg-[#f5f3eb] hover:rounded hover:p-1">
            Resources
          </li>
          <li className="hover:bg-[#f5f3eb] hover:rounded hover:p-1">
            Pricing
          </li>
        </ul>
        <div className="flex space-x-7 text-[#413735] cursor-pointer  items-center">
          <div className="hover:bg-[#f5f3eb] hover:rounded hover:p-1">
            Talk to sales
          </div>
          <div className="hover:bg-[#f5f3eb] hover:rounded "> Login</div>
          <div>
            <Button>Get Started Free </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
