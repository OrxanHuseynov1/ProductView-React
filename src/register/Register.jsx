import React from 'react'
import Form from '../common/Form'
import { useStore } from 'zustand'
import { themeStore } from '../common/Store'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const formItems = [
        {
            name: "firstname",
            label: "Firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter a password"
        },

    ]

    const buttons = [
        {
            title: "Register",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Already have an account?",
            style: "",
            action: () => {navigate("/")}
        },
    ]

    const {theme,toggle} = useStore(themeStore)

  return (
    <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-black text-white"}`}>
        <Form formItems={formItems} formButtons={buttons}/>

    </div>
  )
}

export default Register