import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('user1')
        this.props.history.replace('/mongodb')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)