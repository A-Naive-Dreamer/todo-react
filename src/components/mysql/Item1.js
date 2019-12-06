import React, { Component } from 'react'
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import Delete from '../../assets/images/delete.png'
import Edit from '../../assets/images/edit.png'
import Check from '../../assets/images/check.png'

export default class Item1 extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            isVisible: false,
            newTodo: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.makeVisible = this.makeVisible.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    updateTodo() {
        this.props.handleUpdate(this.props.todo.id, this.state.newTodo)
        this.makeVisible()
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    makeVisible() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        return (
            <ListGroup.Item
                action={true}
                variant="warning"
            >
                <Row>
                    <Col xs={{
                        span: 3,
                        order: 1
                    }}>
                        <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => this.props.handleCheck(this.props.todo.id)}
                            style={{
                                margin: '0 10px'
                            }}
                        >
                            <Image
                                roundedCircle={true}
                                src={Check}
                                alt="Check"
                                style={{
                                    width: '25px',
                                    height: 'auto'
                                }}
                            />
                        </Button>
                    </Col>
                    <Col xs={{
                        span: 4,
                        order: 2
                    }}>
                        <div style={{
                            display: this.state.isVisible ? 'none' : 'block'
                        }}>
                            <span className="text-secondary">
                                Todo -&nbsp;
                            </span>
                            {
                                this.props.todo.todo
                            }
                        </div>
                        <Form style={{
                            display: this.state.isVisible ? 'block' : 'none'
                        }}>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="newTodo"
                                    value={this.state.newTodo}
                                    placeholder="Type new value of todo here..."
                                    onChange={e => this.handleChange(e)}
                                />
                                <Button
                                    variant="outline-info"
                                    block={true}
                                    onClick={this.updateTodo}
                                >
                                    Update
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col
                        xs={{
                            span: 4,
                            order: 3
                        }}
                        style={{
                            margin: '0 10px'
                        }}
                    >
                        <Button
                            variant="outline-danger"
                            size="sm"
                        >
                            <Image
                                roundedCircle={true}
                                src={Edit}
                                alt="Edit"
                                onClick={this.makeVisible}
                                style={{
                                    width: '25px',
                                    height: 'auto'
                                }}
                            />
                        </Button>
                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => this.props.handleDelete(this.props.todo.id)}
                            style={{
                                margin: '0 10px'
                            }}
                        >
                            <Image
                                roundedCircle={true}
                                src={Delete}
                                alt="Delete"
                                style={{
                                    width: '25px',
                                    height: 'auto'
                                }}
                            />
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}
