import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('user')
        this.props.history.replace('/')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)