import React from "react";
import ReactDom from "react-dom";
import Login from "./components/login/login"

const App = () =>{
    return (
        <div >
            <Login>

            </Login>

        </div>
    )
}

ReactDom.render(App(), document.getElementById('root'))