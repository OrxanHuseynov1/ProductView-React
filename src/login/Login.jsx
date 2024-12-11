import React from 'react'
import Form from '../common/Form'
import { useStore } from 'zustand'
import { themeStore } from '../common/Store'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const formItems = [
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
            title: "Login",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {navigate("/homePage")}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {navigate("/register")}
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]

    const {theme,toggle} = useStore(themeStore)

  return (
    <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-black text-white"}`}>
        <Form formItems={formItems} formButtons={buttons}/>

    </div>
  )
}

export default Login