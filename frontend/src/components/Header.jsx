import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState()
    const [username, setUsername] = useState("")

    const guestLinks = (
      <>
        <Link to="register" className='btn btn-link'>
          Register
        </Link>
        <Link to="login" className='btn btn-link'>
          Login
        </Link>
      </>
    )

    const authLinks = (
      <>
        <Link to="posts/create" className='btn btn-outline-success link-create-post' style={{width: "fit-content"}}>
          Create post
        </Link>
        <div className='input-group' style={{ width: 'fit-content' }}>
          <label className='input-group-text'>
            @
          </label>
          <input
            className="form-control"
            type="text"
            disabled={true}
            readOnly={true}
            value={username}
          />
        </div>
        <button
          onClick={() => {
            Cookies.remove("token");
          }}
          className="btn btn-link"
        >
          Logout
        </button>
      </>
    );

    useEffect(() => {
      const tokenExist = Cookies.get("token");
      setIsAuthenticated(tokenExist ? true : false);
    });

    useEffect(() => {
      if (isAuthenticated) {
        const userAuthenticated = Cookies.get('user_username')
        setUsername(userAuthenticated)
      }
    },[isAuthenticated])

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand kanit-5" to="/">
            BlogApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {isAuthenticated ? authLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
}