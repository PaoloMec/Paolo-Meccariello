import React from 'react'
import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <div className='navBar'>
      <div>
        <a href='#'>
          <img src={Logo} alt='logo' />
        </a>
      </div>
      <div>
        ©2023, PAOLO MECCARIELLO
      </div>
      <div>
        <a href='#'>PROGETTI</a>
      </div>

      
    </div>
  )
}

export default Nav