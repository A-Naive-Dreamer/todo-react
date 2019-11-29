import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        let user = localStorage.getItem('user')

        if (user) {
            return (
                <Navbar expand="md" className="bg-success justify-content-between" style={{
                    color: '#ffffff',
                    fontWeight: 900
                }}>
                    <Navbar.Brand>
                        Yosua's Todo
                </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to="/home" className="nav-link">
                                Home
                        </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/log-out" className="nav-link">
                                Log Out
                        </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar expand="md" className="bg-success justify-content-between">
                    <Navbar.Brand>
                        Yosua's Todo
                </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to="/" className="nav-link">
                                Sign Up
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/log-in" className="nav-link">
                                Sign In
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }
    }
}