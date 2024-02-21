import React from "react";

const Button = (props) => {
    const {name, cancelButton} = props
  return <button type="button" className={`w-[15%] text-[80%] my-2 py-2 font-bold rounded-md ${cancelButton ? 'bg-white border-2 border-[#B34B1E] text-[#B34B1E]' : 'bg-[#B34B1E] text-white'}`}>{name}</button>;
};

export default Button;
