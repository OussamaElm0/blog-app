import React from 'react'
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'

export default function Header() {

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h6 className="navbar-brand kanit-5">BlogApp</h6>
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
        </div>
        <button onClick={() => {
          Cookies.remove('token')
        }}>
          Logout
        </button>
      </nav>
    );
}