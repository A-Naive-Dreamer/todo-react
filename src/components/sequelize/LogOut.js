import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LogOut extends Component {
    render() {
        localStorage.removeItem('token4')
        this.props.history.replace('/sequelize')

        return (
            <div>

            </div>
        )
    }
}

export default withRouter(LogOut)