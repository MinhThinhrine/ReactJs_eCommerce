import "./bootstrap-custom.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HashRouter as Router } from "react-router-dom";
import Test from "./Test";
import reportWebVitals from "./reportWebVitals";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Products from "./Component/Products";

library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            {/*<App/>*/}
        {/*    /!*<Test/>*!/*/}
            <Body/>
            {/*<Products/>*/}
        </Router>
        {/*<Header/>*/}

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
