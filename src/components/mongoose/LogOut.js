import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('token2')
        this.props.history.replace('/mongoose')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)