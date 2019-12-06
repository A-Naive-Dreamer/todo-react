import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import { default as HomeMongoDB } from './mongodb/Home'
import { default as SignUpMongoDB } from './mongodb/SignUp'
import { default as LogInMongoDB } from './mongodb/LogIn'
import { default as LogOutMongoDB } from './mongodb/LogOut'
import { default as HomeMongoose } from './mongoose/Home'
import { default as SignUpMongoose } from './mongoose/SignUp'
import { default as LogInMongoose } from './mongoose/LogIn'
import { default as LogOutMongoose } from './mongoose/LogOut'
import { default as HomeMySQL } from './mysql/Home'
import { default as SignUpMySQL } from './mysql/SignUp'
import { default as LogInMySQL } from './mysql/LogIn'
import { default as LogOutMySQL } from './mysql/LogOut'
import { default as HomeSequelize } from './sequelize/Home'
import { default as SignUpSequelize } from './sequelize/SignUp'
import { default as LogInSequelize } from './sequelize/LogIn'
import { default as LogOutSequelize } from './sequelize/LogOut'
import Menu from './Menu'

export default class FrontPage extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                    >
                        <Menu />
                    </Route>
                    <Route
                        path="/mongodb"
                        exact={true}
                    >
                        <SignUpMongoDB />
                    </Route>
                    <Route
                        path="/mongodb/log-in"
                        exact={true}
                    >
                        <LogInMongoDB />
                    </Route>
                    <Route
                        path="/mongodb/home"
                        exact={true}
                    >
                        <HomeMongoDB />
                    </Route>
                    <Route
                        path="/mongodb/log-out"
                        exact={true}
                    >
                        <LogOutMongoDB />
                    </Route>
                    <Route
                        path="/mongoose"
                        exact={true}
                    >
                        <SignUpMongoose />
                    </Route>
                    <Route
                        path="/mongoose/log-in"
                        exact={true}
                    >
                        <LogInMongoose />
                    </Route>
                    <Route
                        path="/mongoose/home"
                        exact={true}
                    >
                        <HomeMongoose />
                    </Route>
                    <Route
                        path="/mongoose/log-out"
                        exact={true}
                    >
                        <LogOutMongoose />
                    </Route>
                    <Route
                        path="/mysql"
                        exact={true}
                    >
                        <SignUpMySQL />
                    </Route>
                    <Route
                        path="/mysql/log-in"
                        exact={true}
                    >
                        <LogInMySQL />
                    </Route>
                    <Route
                        path="/mysql/home"
                        exact={true}
                    >
                        <HomeMySQL />
                    </Route>
                    <Route
                        path="/mysql/log-out"
                        exact={true}
                    >
                        <LogOutMySQL />
                    </Route>
                    <Route
                        path="/sequelize"
                        exact={true}
                    >
                        <SignUpSequelize />
                    </Route>
                    <Route
                        path="/sequelize/log-in"
                        exact={true}
                    >
                        <LogInSequelize />
                    </Route>
                    <Route
                        path="/sequelize/home"
                        exact={true}
                    >
                        <HomeSequelize />
                    </Route>
                    <Route
                        path="/sequelize/log-out"
                        exact={true}
                    >
                        <LogOutSequelize />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
