import React from "react";

export const Input = ({ id, label, value, handleChange, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 mx-4" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="border-2 w-100 rounded-4xl bg-purple-50 h-10 px-4"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
