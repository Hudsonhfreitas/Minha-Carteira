import React from "react";
import App from "./app.routes";
import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default Routes;
