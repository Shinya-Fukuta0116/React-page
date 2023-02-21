import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }

  return (
    <div className='wrapper' id='header'>
      <h3>Furniture Design</h3>
      <div id="navArea" className={active ? "open" : ""}>
        {/* <div id="navArea" className={active ===true ? "open" : ""}> */}
        <nav>
          <div className='inner'>
            <ul>
              <li>
                <Link to="/" className='toggle-btn' onClick={classToggle}>Home</Link>
              </li>
              <li>
                <Link to="/blog" className='toggle-btn' onClick={classToggle}>Blog</Link>
              </li>
              <li>
                <Link to="/company" className='toggle-btn' onClick={classToggle}>Company</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='toggle-btn' onClick={classToggle}>
          <span></span>
          <span></span>
        </div>
        <div id='mask' className='open' onClick={classToggle}></div>
      </div>
    </div>

  )
}

export default Header

