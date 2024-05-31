import React from 'react'

export default function InputField({id ,title, name , value , onChange , label, error}) {
  return (
    <div className="input-container">
        <label htmlFor={title}>{label}</label>
        <input
          className="px-2"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <p className="text-sm font-extralight text-red-600">{error}</p>
      </div>
  )
}
