import React from "react";

function Input({
  lable,
  placeholder,
  onchange,
  type = "text",
}: {
  lable: string;
  placeholder: string;
  onchange?: (e: any) => void;
  type?: "text" | "password";
}) {
  return (
    <div className="my-4  max-w-sm mx-auto ">
      <div className=" text-gray-700 font-medium pb-1 text-lg">
        * <label> {lable}</label>
      </div>
      <div className="">
        <input
          className="w-full p-3 border rounded-md flex justify-center items-center focus:ring-2 focus:ring-indigo-500 "
          type={type}
          placeholder={placeholder}
          onChange={onchange}
        />
      </div>
    </div>
  );
}

export default Input;
