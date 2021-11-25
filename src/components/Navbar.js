import React from "react";
import logo from "../assets/bnmlogo.svg";

function Navbar() {
    return <div className="navbar">
        <div className="inner-navbar">
            <img className="bnm-logo" src={logo} alt="bnm logo" />
            <span className="bank-of">BNM</span>
        </div>
        <div className="navmenu">
            <ul>
                <a href="/">Home</a>
                <a href="/">Client List</a>
                <a href="/">New Client</a>
                <a href="/">Deposit</a>
                <a href="/">Withdraw</a>
                <a href="/">Transfer</a>
                <a href="/">Transactions History</a>
            </ul>
        </div>
    </div>
}

export default Navbar;