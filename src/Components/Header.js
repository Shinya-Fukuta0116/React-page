import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='wrapper' id='header'>
      <div id='logo' className='active'>
        <h3>Furniture Design</h3>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

    </div>
  )
}



export default Header