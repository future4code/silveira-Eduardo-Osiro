import React from 'react'
import {ContainerHeader} from './styledHeader'

function Header() {

    const logout = () => {
        localStorage.removeItem("token")
    }

  return (
    <ContainerHeader>
        <h1> LabEddit </h1>
        <button onClick={logout}> Logout </button>

    </ContainerHeader>
  )
}

export default Header










