console.log("worked!");

//app object
var app = {
    title: "Indecision App",
    subtitle: "Put your life in a hand of a computer"
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);


var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);