import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Technologijų Apribojimas</h1>
        {/* <p>Just another, fully responsive website</p> */}
    </header>
)

export default Header
