import React from "react";
import App from "./app.routes";
import Auth from './auth.routes';

import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => (
    <BrowserRouter>
        <Auth />
    </BrowserRouter>
)

export default Routes;
