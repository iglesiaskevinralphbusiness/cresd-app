import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                { routes.map((r, index) => <Route path={r.path} component={r.component} exact={r.exact} key={index}></Route>) }
                <Redirect to="/not-found" ></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
