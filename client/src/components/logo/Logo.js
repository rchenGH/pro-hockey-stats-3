import React from 'react';
import Logo from './Logo.png'
import LogoStyle from './logo.css'

function HockeyLogo (){
  return(
    <div className="mini-logo-div">
      <img src={Logo} alt="MyLogo" className="mini-logo" />
    </div>
  )
}

export default HockeyLogo
