import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { LoginScreen } from '../components/screens/LoginScreen';
import { isAuthenticated } from '../helpers/isAuthenticated';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './RouteTypes/PrivateRoute';
import { PublicRoute } from './RouteTypes/PublicRoute';
export const LoginRouter = () => {
    const isAuth = isAuthenticated();
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated = {isAuth}/>
                    <PrivateRoute
                        path="/" component={DashBoardRoutes}
                        isAuthenticated={isAuth}
                    />
                </Switch>
            </div>
        </Router>
    )
}
