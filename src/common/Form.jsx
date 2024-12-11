import React, { useEffect, useState } from 'react'
import FormInput from './FormInput'

const Form = ({formItems,formButtons}) => {

    const [formData,setFormData] = useState({})

    const handleInputChange = (name,value) => 
    {
        setFormData(prevState => ({...prevState,[name]:value}))        
    }

    useEffect(() => {console.log(formData)},[formData])


  return (

    <form className="flex flex-col gap-5 max-w-[400px] mx-auto border p-5 mt-12 rounded-md">
    {
        formItems.map(item => <FormInput handleInputChange={handleInputChange} name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} />)
    }

    {
        formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
    }
    </form>



  )
}

export default Form