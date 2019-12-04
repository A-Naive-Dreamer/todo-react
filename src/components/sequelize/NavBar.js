import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        let user = localStorage.getItem('user4')

        if (user) {
            return (
                <Navbar expand="md" className="bg-warning justify-content-between" style={{
                    color: '#ffffff',
                    fontWeight: 900
                }}>
                    <Navbar.Brand className="display-4" style={{
                        fontFamily: 'Itim'
                    }}>
                        Yosua's Sequelize Todo
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to="/" className="nav-link">
                                Menu
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/sequelize/home" className="nav-link">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/sequelize/log-out" className="nav-link">
                                Log Out
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar expand="md" className="bg-warning justify-content-between">
                    <Navbar.Brand className="display-4" style={{
                        fontFamily: 'Itim'
                    }}>
                        Yosua's Sequelize Todo
                </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to="/" className="nav-link">
                                Menu
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/sequelize" className="nav-link">
                                Sign Up
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/sequelize/log-in" className="nav-link">
                                Sign In
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }
    }
}