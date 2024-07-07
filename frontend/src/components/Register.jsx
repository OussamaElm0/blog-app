import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import styles from "../styles/auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'

const env = import.meta.env

export default function Register(){
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    })
    const navigate = useNavigate()

    const handleChange = e => {
        const { value, name } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const { email, username, password, confirm_password } = formData
        try {
            if(
                email == "" ||
                username == "" ||
                password == "" ||
                confirm_password == ""
            ) {
                toast.error("All fields are required");
            } else {
                if (confirm_password !== password) {
                    toast.error("The passwords don't match")
                } else {
                    const response = await axios.post(
                      `${env.VITE_REACT_APP_API_URL}/auth/register`,{
                        username,
                        email,
                        password
                      },
                      { 
                        headers: { 
                          'Content-Type': 'application/json' 
                        }
                      }
                    );
                    if(response.data.success) {
                        navigate("/login");
                    } else if (response.data.error) {
                        toast.error(response.data.error)
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
      <>
        <h1 className={styles.h1}>Register form</h1>
        <form className={styles.register_form} onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <label htmlFor="username" className="input-group-text">
              @
            </label>
            <input
              value={formData.username}
              name="username"
              onChange={handleChange}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="email" className="input-group-text">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              name="email"
              id="email"
              type='email'
            />
          </div>
          <div className={styles.passwords_section}>
            <div className="input-group">
              <label htmlFor="password" className="input-group-text">
                Password
              </label>
              <input
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                name="password"
                type='password'
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm_password" className="input-group-text">
                Confirm Password
              </label>
              <input
                value={formData.confirm_password}
                onChange={handleChange}
                className="form-control"
                id="confirm_password"
                name="confirm_password"
                type='password'
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Register
          </button>
          <Link to="/login" className={styles.link}>
            Already have an account? Login here
          </Link>
        </form>
        <Toaster />
      </>
    );
}
