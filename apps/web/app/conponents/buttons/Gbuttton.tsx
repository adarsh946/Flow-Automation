import React from "react";

function Gbuttton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[#fffdf9] text-[#201515] font-bold border-1 border-[#201515] hover:border-2 hover:border-[#201515] transition duration-300 text-center rounded-3xl text-lg px-4 py-2 cursor-pointer">
      {children}
    </button>
  );
}

export default Gbuttton;
