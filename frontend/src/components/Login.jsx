import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/auth.module.scss"
import { Link } from 'react-router-dom';
const env = import.meta.env

export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = formData

        if(email == "" || password == "") {
            toast.error('Please check fields')
        } else {
            try {
              const response = await axios.post(
                `${env.VITE_REACT_APP_API_URL}/auth/login`,
                formData
              );
              if (response.data.error) {
                toast.error(response.data.error);
                console.log(response.data.error);
              }else if(response.data.token){
                console.log(response.data);
                Cookies.set("token", response.data.token);
                navigate("/");
              }
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
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :<span>*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password :<span>*</span>
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Log in{" "}
          </button>
          <Link to="/register" className={styles.link}>
            Don't have an account? Register here{" "}
          </Link>
        </form>
        <Toaster />
      </>
    );
}