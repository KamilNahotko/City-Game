import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080/api/";
axios.defaults.baseURL = "http://34.122.22.62:8080/api/";
// axios.defaults.baseURL = "http://citygame.ga:8080/api/";

ReactDOM.render(<App />, document.getElementById("root"));
