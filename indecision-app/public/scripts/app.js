"use strict";

console.log("worked!");

//app object
var app = {
    title: "Indecision App",
    subtitle: "Put your life in a hand of a computer"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
