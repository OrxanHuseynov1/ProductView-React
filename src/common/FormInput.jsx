import React from 'react'

const FormInput = ({name,label,type,placeholder,handleInputChange}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={name}>{label}</label>
        <input className='border rounded-md p-2' name={name} type={type}
            onChange={(e) => 
            {
                handleInputChange(e.target.name,e.target.value)
            }} 
        />
    </div>
  )
}

export default FormInput