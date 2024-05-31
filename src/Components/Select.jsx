import React from "react";

export default function Select({
  id,
  title,
  name,
  value,
  onChange,
  label,
  error,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={title}>{label}</label>
      <select
        className="border-2 border-black p-1"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option hidden value="">
          Categories
        </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="text-sm font-extralight text-red-600">{error}</p>
    </div>
  );
}
