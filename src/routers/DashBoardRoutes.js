import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { Navbar } from '../components/others/Navbar'
import { AsocsScreen } from '../components/screens/AsocsScreen';
import { SelectedAsoc } from '../components/screens/SelectedAsoc';
import { SelectedUser } from '../components/screens/SelectedUser';
import { SupportScreen } from '../components/screens/SupportScreen';
import { UsersScreen } from '../components/screens/UsersScreen';
export const DashBoardRoutes = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/asocs" component={AsocsScreen} />
                    <Route exact path="/asocs/:asocID" component={SelectedAsoc} />
                    <Route exact path="/users" component={UsersScreen} />
                    <Route exact path="/users/:userID" component={SelectedUser} />
                    <Route exact path="/support" component={SupportScreen} />
                    <Route path="/users" component={SupportScreen} />
                </Switch>
            </div>
        </div>
    )
}
