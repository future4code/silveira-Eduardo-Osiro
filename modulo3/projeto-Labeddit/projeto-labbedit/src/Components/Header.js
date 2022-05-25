import React from 'react'
import {ContainerHeader} from './styledHeader'
import Logo from '../Assets/logo-labenu.png'

function Header() {

    const logout = () => {
        localStorage.removeItem("token")
    }

  return (
    <ContainerHeader>
        <img src={Logo} alt='Logo Labenu' />
        <button onClick={logout}> Logout </button>

    </ContainerHeader>
  )
}

export default Header










