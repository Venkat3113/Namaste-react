import React from "react";
import ReactDOM from "react-dom/client";  

const head = React.createElement("h1", {}, "Hello world this is chitti!!!");

const tail = ReactDOM.createRoot(document.getElementById("root"));
tail.render(head);
