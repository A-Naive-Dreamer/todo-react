import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Carousel } from 'react-bootstrap'
import Background3 from '../assets/images/background-3.jpg'
import Background4 from '../assets/images/background-4.jpg'
import Background5 from '../assets/images/background-5.jpg'
import Background9 from '../assets/images/background-9.jpg'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }

        this.changeTitle = this.changeTitle.bind(this)
    }

    changeTitle(val) {
        this.setState({
            title: val
        })
    }

    render() {
        return (
            <div>
                <Carousel
                    controls={true}
                    indicators={false}
                    style={{
                        height: window.innerHeight + 'px'
                    }}
                    interval={3000}
                >
                    <Carousel.Item style={{
                        backgroundColor: '#505050',
                        backgroundImage: `url(${Background3})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: window.innerHeight + 'px',
                        width: window.innerWidth + 'px'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Row noGutters={true} style={{
                                backgroundColor: 'rgba(64, 64, 64, 0.75)'
                            }}>
                                <Col>
                                    <h1
                                        className="display-1 text-success"
                                        style={{
                                            fontFamily: 'Lobster',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        MongoDB Todo
                                    </h1>
                                    <Link to="/mongodb"
                                        style={{
                                            color: '#ffffff'
                                        }}
                                    >
                                        <Button
                                            className="font-weight-bolder"
                                            variant="success"
                                            block={true}
                                        >
                                            MongoDB
                                    </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{
                        backgroundColor: '#505050',
                        backgroundImage: `url(${Background4})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: window.innerHeight + 'px',
                        width: window.innerWidth + 'px'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Row noGutters={true} style={{
                                backgroundColor: 'rgba(64, 64, 64, 0.75)'
                            }}>
                                <Col>
                                    <h1
                                        className="display-1 text-info"
                                        style={{
                                            fontFamily: 'Lobster',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Mongoose Todo
                        </h1>
                                    <Link
                                        to="/mongoose"
                                        style={{
                                            color: '#ffffff'
                                        }}
                                    >
                                        <Button
                                            className="font-weight-bolder"
                                            variant="info"
                                            block={true}
                                        >
                                            Mongoose
                                    </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{
                        backgroundColor: '#505050',
                        backgroundImage: `url(${Background5})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: window.innerHeight + 'px',
                        width: window.innerWidth + 'px'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Row noGutters={true} style={{
                                backgroundColor: 'rgba(64, 64, 64, 0.75)'
                            }}>
                                <Col>
                                    <h1
                                        className="display-1 text-danger"
                                        style={{
                                            fontFamily: 'Lobster',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        MySQL Todo
                            </h1>
                                    <Link
                                        to="/mysql"
                                        style={{
                                            color: '#ffffff'
                                        }}
                                    >
                                        <Button
                                            className="font-weight-bolder"
                                            variant="danger"
                                            block={true}
                                        >
                                            MySQL
                                    </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{
                        backgroundColor: '#505050',
                        backgroundImage: `url(${Background9})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: window.innerHeight + 'px',
                        width: window.innerWidth + 'px'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Row noGutters={true} style={{
                                backgroundColor: 'rgba(64, 64, 64, 0.75)'
                            }}>
                                <Col>
                                    <h1
                                        className="display-1 text-warning"
                                        style={{
                                            fontFamily: 'Lobster',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Sequelize Todo
                            </h1>
                                    <Link
                                        to="/sequelize"
                                        style={{
                                            color: '#ffffff'
                                        }}
                                    >
                                        <Button
                                            className="font-weight-bolder"
                                            variant="warning"
                                            block={true}
                                        >
                                            Sequelize
                                    </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
