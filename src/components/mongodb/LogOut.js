import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('token')
        this.props.history.replace('/mongodb')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)