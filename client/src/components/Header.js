import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {


    const openMenu = () => {
        document.querySelector('.side-menu').classList.add('show')
    }
    const closeMenu = () => {
        document.querySelector('.side-menu').classList.remove('show')
    }
    
    const cartQunty = useSelector(state => state.cartQunty.cartQunty)

    return (
        <div className='nav-bar'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className='d-flex'>
                    <span className="nav-menu" onClick={openMenu}></span>
                    <NavLink to='/' className='logo-extension'>
                        <span className="nav-logo"></span>
                        <span className="nav-extension">.np</span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mx-auto">
                        <FormControl type="text" placeholder="Search"  />
                        <div className="search-field">
                            <span className="sprite-search"></span>
                        </div>
                    </Form>
                    <Nav >
                        <div className="cart">
                            <span className="cartCount">{cartQunty? cartQunty : 0}</span>
                            <span className="cartbox"></span>
                            <span className="cartname">Cart</span>
                        </div>
                        <div className="sign-in-out">
                            <p>Sign In</p>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div className="side-menu">
                <div className="close-btn" onClick={closeMenu}></div>
                <div className="menu-content">
                    <h3>Sandesh Shrestha</h3>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                        <li>Four</li>
                        <li>Five</li>
                    </ul>
                </div>
                <div className="canvas-bg"></div>
            </div>
        </div>
    )
}

export default Header
