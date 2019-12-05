import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        let user = localStorage.getItem('token')

        if (user) {
            return (
                <Navbar
                    expand="md"
                    className="bg-success justify-content-between"
                    style={{
                        color: '#ffffff',
                        fontWeight: 900
                    }}
                >
                    <Navbar.Brand
                        className="display-4"
                        style={{
                            fontFamily: 'Itim'
                        }}
                    >
                        Yosua's MongoDB Todo
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link
                                to="/"
                                className="nav-link"
                            >
                                Menu
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongodb/home"
                                className="nav-link"
                            >
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongodb/log-out"
                                className="nav-link"
                            >
                                Log Out
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar
                    expand="md"
                    className="bg-success justify-content-between"
                    style={{
                        color: '#ffffff',
                        fontWeight: 900
                    }}
                >
                    <Navbar.Brand
                        className="display-4"
                        style={{
                            fontFamily: 'Itim'
                        }}
                    >
                        Yosua's MongoDB Todo
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link
                                to="/"
                                className="nav-link"
                            >
                                Menu
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongodb"
                                className="nav-link"
                            >
                                Sign Up
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongodb/log-in"
                                className="nav-link"
                            >
                                Sign In
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }
    }
}