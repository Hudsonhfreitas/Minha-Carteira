import React from "react";
import App from "./app.routes";
import Auth from './auth.routes';

import { useAuth} from '../hooks/auth'

import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => {

    const {logged} = useAuth();

    return (
        <BrowserRouter>
            {logged ? <App/> : <Auth />}
        </BrowserRouter>
    )
}


export default Routes;
