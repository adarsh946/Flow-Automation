import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#ff4f00] border-[#ff4f00] transition duration-300 hover:bg-[#D24304] hover:border-[#D24304]  text-white text-center  rounded-3xl px-4 py-2  text-lg cursor-pointer">
      {children}
    </div>
  );
}

export default Button;
