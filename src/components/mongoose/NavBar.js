import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        let user = localStorage.getItem('token2')

        if (user) {
            return (
                <Navbar
                    expand="md"
                    className="bg-info justify-content-between"
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
                        Yosua's Mongoose Todo
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
                                to="/mongoose/home"
                                className="nav-link"
                            >
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongoose/log-out"
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
                    className="bg-info justify-content-between"
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
                        Yosua's Mongoose Todo
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
                                to="/mongoose"
                                className="nav-link"
                            >
                                Sign Up
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/mongoose/log-in"
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