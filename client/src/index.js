/*  Here we need to require React on every single React file.
    We also need to import ReactDOM from the react-dom module.
    We only use ReactDOM once in a React application.
*/
import React from "react";
import ReactDOM from "react-dom";

/*  We need to import the App component because that's what we're
    going to load up first in our app. It's the parent-most component
    that we are going to render into the div#root located in `index.html`
*/
import App from "./App";

/*  `ReactDOM.render` is the method that takes the parent-most component
    and renders it to a specific div (here it's div#root) in the `index.html` file
*/
ReactDOM.render(<App />, document.getElementById("root"));
