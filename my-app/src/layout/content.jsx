import React from "react";
import { Employees } from '../components/employees';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AddEmployee } from "../components/addEmployee";



const Content = () => {
    return (
        <Router>
            <div className="content">
                <Switch>
                    <Route path="/add-employee" component={AddEmployee} />
                    <Route path="/" component={Employees} />
                </Switch>
            </div>
        </Router>
    );
}
export default Content;
