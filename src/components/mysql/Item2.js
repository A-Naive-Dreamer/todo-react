import React, { Component } from 'react'
import {
    Row,
    Col,
    ListGroup,
    Image,
    Button
} from 'react-bootstrap'
import Delete from '../../assets/images/delete.png'

export default class Item2 extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            isVisible: false,
            newTodo: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.makeVisible = this.makeVisible.bind(this)
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
                variant="success"
                key={this.props.todo.id}
            >
                <Row>
                    <Col xs={{
                        span: 4,
                        order: 1
                    }}>
                        <div style={{
                            display: this.state.isVisible ? 'none' : 'block'
                        }}>
                            <span style={{
                                textDecoration: 'line-through'
                            }}>
                                <span className="text-secondary">
                                    Todo -&nbsp;
                                </span>
                                {
                                    this.props.todo.todo
                                }
                            </span>
                        </div>
                    </Col>
                    <Col
                        xs={{
                            span: 4,
                            offset: 4,
                            order: 2
                        }}
                        style={{
                            margin: '0 10px'
                        }}
                    >
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
