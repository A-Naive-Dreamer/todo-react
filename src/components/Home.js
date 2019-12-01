import React, { Component } from 'react'
import axios from 'axios'
import {
    Col,
    Row,
    Form,
    FormControl,
    FormGroup,
    Button,
    ListGroup,
    Image
} from 'react-bootstrap'
import Item1 from './Item1'
import Item2 from './Item2'
import NavBar from './NavBar'
import Add from '../assets/images/add.png'
import Background from '../assets/images/background-3.jpg'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            newTodo: '',
            todoList: [],
            isFullscreen: false,
            keywords: '',
            isUncompletedTab: true
        }

        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.checkOne = this.checkOne.bind(this)
        this.goToFullscreen = this.goToFullscreen.bind(this)
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab() {
        this.setState({
            isUncompletedTab: !this.state.isUncompletedTab
        })
    }

    goToFullscreen() {
        if (!this.state.isFullscreen) {
            document.body.requestFullscreen()
        } else {
            document.exitFullscreen()
        }

        this.setState({
            isFullscreen: !this.state.isFullscreen
        })
    }

    addTodo() {
        let path = `${process.env.REACT_APP_API}/todo/${this.state.user.id}`

        axios
            .post(path, { todos: this.state.newTodo })
            .then(result => {
                this.setState({
                    todoList: result.data.data
                })
            })
    }

    updateTodo(idx, newValue) {
        let path = `${process.env.REACT_APP_API}/todo/${this.state.user.id}/${idx}`

        axios
            .put(path, { todos: newValue })
            .then(result => {
                console.log(result)
                this.setState({
                    todoList: result.data.data
                })
            })
    }

    deleteTodo(idx) {
        let path = `${process.env.REACT_APP_API}/todo/${this.state.user.id}/${idx}`

        axios
            .delete(path)
            .then(result => {
                console.log(result)
                this.setState({
                    todoList: result.data.data
                })
            })
    }

    checkOne(idx) {
        let path = `${process.env.REACT_APP_API}/todo/completed/${this.state.user.id}/${idx}`

        axios
            .put(path)
            .then(result => {
                console.log(result)
                this.setState({
                    todoList: result.data.data
                })
            })
    }

    componentDidMount() {
        let path = `${process.env.REACT_APP_API}/todo/${this.state.user.id}`

        axios
            .get(path)
            .then(result => {
                this.setState({
                    todoList: result.data.data
                })

                console.log(this.state.todoList)
            })
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#ffffff',
                backgroundImage: `url(${Background})`,
                height: window.innerHeight + 'px'
            }}>
                <NavBar />
                <Button
                    variant="warning"
                    block={true}
                    onClick={this.goToFullscreen}
                    style={{
                        color: '#ffffff',
                        fontWeight: 900,
                        width: '90%',
                        margin: '10px auto'
                    }}
                >
                    {
                        this.state.isFullscreen ?
                            'Exit Fullscreen' :
                            'Go To Fullscreen'
                    }
                </Button>
                <Form style={{
                    margin: '0 auto',
                    width: '80%'
                }}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="keywords"
                            value={this.state.keywords}
                            placeholder="Search..."
                            onChange={e => this.handleChange(e)}
                        />
                    </FormGroup>
                </Form>
                <Row>
                    <Col
                        md={{
                            span: 6,
                            order: 1
                        }}
                        xs={{
                            span: 12,
                            order: 1
                        }}
                    >
                        <Form>
                            <h1
                                className="text-center display-4 text-danger"
                                style={{
                                    fontFamily: 'Aladin',
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                }}
                            >
                                {
                                    this.state.user.firstName + ' ' + this.state.user.lastName
                                }
                            </h1>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="newTodo"
                                    value={this.state.newTodo}
                                    placeholder="New Todo"
                                    onChange={e => this.handleChange(e)}
                                />
                                <Button
                                    block={true}
                                    variant="primary"
                                    onClick={this.addTodo}
                                >
                                    <Image
                                        src={Add}
                                        alt="Add"
                                        roundedCircle={true}
                                        style={{
                                            width: '25px',
                                            height: 'auto'
                                        }}
                                    />
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col
                        md={{
                            span: 6,
                            order: 2
                        }}
                        xs={{
                            span: 12, order: 2
                        }}
                    >
                        <Row noGutters={true}>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 1
                                }}
                                md={{
                                    span: 6,
                                    order: 1
                                }}
                            >
                                <Button
                                    block={true}
                                    className="bg-dark"
                                    style={{
                                        fontFamily: 'Calistoga',
                                        padding: '10px 0'
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            isUncompletedTab: true
                                        })
                                    }}
                                >
                                    Uncompleted Task
                                </Button>
                            </Col>
                            <Col xs={{
                                span: 12,
                                order: 1
                            }}
                                md={{
                                    span: 6,
                                    order: 1
                                }}
                            >
                                <Button
                                    block={true}
                                    className="bg-dark"
                                    style={{
                                        fontFamily: 'Calistoga',
                                        padding: '10px 0'
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            isUncompletedTab: false
                                        })
                                    }}
                                >
                                    Completed Task
                                </Button>
                            </Col>
                        </Row>
                        <div style={{
                            display: this.state.isUncompletedTab ? 'block' : 'none'
                        }}>
                            <h2
                                className="text-center text-warning"
                                style={{
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                    fontFamily: 'Calistoga',
                                    padding: '10px 0'
                                }}
                            >
                                Uncompleted Task
                            </h2>
                            <ListGroup 
                                className="mx-auto"
                                style={{
                                    height: '305px',
                                    overflow: 'auto'
                                }}
                            >
                                {
                                    this.state.todoList.map(item => {
                                        if (item.status === 'uncompleted' &&
                                            item.todos.toLowerCase().includes(this.state.keywords.toLowerCase())) {
                                            return <Item1 todo={item} handleDelete={this.deleteTodo} handleCheck={this.checkOne} handleUpdate={this.updateTodo} />
                                        }
                                    })
                                }
                            </ListGroup>
                        </div>
                        <div style={{
                            display: this.state.isUncompletedTab ? 'none' : 'block'
                        }}>
                            <h2
                                className="text-center text-success"
                                style={{
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                    fontFamily: 'Calistoga',
                                    padding: '10px 0'
                                }}
                            >
                                Completed Task
                            </h2>
                            <ListGroup 
                                className="mx-auto"
                                style={{
                                    height: '305px',
                                    overflow: 'auto'
                                }}
                            >
                                {
                                    this.state.todoList.map(item => {
                                        if (item.status === 'completed' &&
                                            item.todos.toLowerCase().includes(this.state.keywords.toLowerCase())) {
                                            return <Item2 todo={item} handleDelete={this.deleteTodo} />
                                        }
                                    })
                                }
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
