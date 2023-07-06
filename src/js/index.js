//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx"

//render your react application
ReactDOM.render(<Home label="Start Bootstrap" options="Home About Services Contact" jumbotronTitle="A warm Welcome!" jumbotronText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" cardTitle = "Card Title" cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonLabel = "Find out more!" />, document.querySelector("#app"));
