import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="px-6 py-2 bg-cyan-800 rounded-full text-white hover:scale-105 duration-300">
      {text}
    </button>
  );
};

export default Button;
