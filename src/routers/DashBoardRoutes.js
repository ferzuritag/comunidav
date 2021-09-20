import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar } from '../components/others/Navbar'
import { SelectedUser } from '../components/screens/SelectedUser';
import { SupportScreen } from '../components/screens/SupportScreen';
import { UsersScreen } from '../components/screens/UsersScreen';

export const DashBoardRoutes = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/users" component={UsersScreen} />
                    <Route exact path="/users/:userID" component={SelectedUser} />
                    <Route exact path="/support" component={SupportScreen} />
                </Switch>
            </div>
        </Router>
    )
}
