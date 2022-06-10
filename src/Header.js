import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <h1><Link to="/about">About</Link></h1>
    <h2><Link to="/contact">Contact</Link></h2>
    </>
  )
}

export default Header