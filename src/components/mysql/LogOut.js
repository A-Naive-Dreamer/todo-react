import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('user3')
        this.props.history.replace('/mysql')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)