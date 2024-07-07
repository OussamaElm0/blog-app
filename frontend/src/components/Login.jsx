import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
const env = import.meta.env

export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    // const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = formData

        if(email == "" || password == "") {
            
        } else {
            try {
              const response = await axios.post(
                `${env.VITE_REACT_APP_API_URL}/auth/login`,
                formData
              );
              console.log(response.data);
            //   login();
              Cookies.set('token', response.data.token)
              navigate("/")
            } catch (e) {
              console.log(e);
            }
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <h1>Login Form </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email :
                    <input 
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password : 
                    <input
                        name='password'
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Log in </button>
            </form>
        </>
    )
}