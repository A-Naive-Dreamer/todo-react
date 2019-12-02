import React, { Component } from 'react'
import axios from 'axios'
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Image,
    FormText
} from 'react-bootstrap'
import TeamWork from '../assets/images/teamwork-2.png'
import NavBar from './NavBar'
import Background from '../assets/images/background-2.jpg'
import { withRouter, Link } from 'react-router-dom'
import swal from 'sweetalert'

class LogIn extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    submitForm(e) {
        e.preventDefault()

        if (
            this.state.email === '' ||
            this.state.password === ''
        ) {
            swal({
                title: 'Fields Is Empty',
                text: 'Please fill all field.',
                icon: 'error'
            })
            return null
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
            swal({
                title: 'Email Format Is Wrong',
                text: 'Please fill email field again.',
                icon: 'error'
            })
            return null
        }

        let path = `${process.env.REACT_APP_API}/users/log-in`

        axios.post(path, this.state)
            .then(result => {
                if (result.data.message === 'Email or password is wrong!') {
                    swal({
                        text: result.data.message,
                        icon: 'error'
                    })
                    return null
                }

                swal({
                    title: 'You Will be Redirect to Home Page',
                    icon: 'success'
                })
                    .then(decision => {
                        localStorage.setItem('user', JSON.stringify(result.data))
                        this.props.history.push('/home')
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        let user = localStorage.getItem('user')

        if (user) {
            this.props.history.replace('/home')
        }

        return (
            <div>
                <NavBar />
                <div style={{
                    backgroundImage: `url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    bckgroundSize: 'cover',
                    height: window.innerHeight + 'px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Form style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: '5px 5px 10px #000000',
                        boxSizing: 'border-box',
                        width: '500px',
                        margin: '0 auto',
                        padding: '25px'
                    }}
                    >
                        <Image
                            className="d-block mx-auto"
                            roundedCircle src={TeamWork} style={{
                                width: '150px',
                                height: 'auto',
                                margin: '0 0 25px 0'
                            }}
                        />
                        <FormGroup>
                            <FormControl
                                type="email"
                                name="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormText>
                                <Link to="/">
                                    Don't have an account, click this link.
                            </Link>
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Button variant="primary" block type="button" onClick={e => this.submitForm(e)}>
                                Log In
                        </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(LogIn)