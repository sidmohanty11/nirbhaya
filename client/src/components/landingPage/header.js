import React from 'react'
import '../styles/header.css'

function Header({ signIn }) {
  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
            <li>
              <a onClick={signIn} href="/useroDash" className="user-login">
                User
              </a>
            </li>
            <li>
              <a onClick={signIn} href="/heroDash" className="hero-login">
                Hero
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
