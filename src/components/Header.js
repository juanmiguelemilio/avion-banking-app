import React from "react";
import logo from "../assets/bnmlogo.svg";

function Header() {
    return <header>
        <img className="bnm-logo" src={logo} alt="bnm logo" />
        <span className="bank-name">Bank of New Maharlika</span>
    </header>
}

export default Header;