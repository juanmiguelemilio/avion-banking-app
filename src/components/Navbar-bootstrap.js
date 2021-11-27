import React from "react";
// import logo from "../assets/bnmlogo.svg";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Dashboard } from "./Dashboard";
// import { Client } from "./Client";
// import { NewClient } from "./NewClient";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img className="bnm-logo" src={logo} alt="bnm logo" /><span class="bnm-wordmark">BNM</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Dashboard</Nav.Link>
                    <Nav.Link href="#">Client List</Nav.Link>
                    <NavDropdown title="Transact" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Deposit</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Withdraw</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Transfer</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="#">Transaction History</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="#deets">Sign In</Nav.Link>
                </Nav>

            </Navbar.Collapse>
            </Container>
        </Navbar>