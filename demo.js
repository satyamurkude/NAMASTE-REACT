 // Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

 /* div id ="parent">
<div id="child">
<h1>I am H1 tage</h1>
<h2>I am H2 tag</h2>
</div>*/
/* 
<div id="child">
<h1>I am H1 tage</h1>
<h2>I am H2 tag</h2>
</div>
</div>*/


// Manipulate the HTML DOM using React
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, ""),
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
    React.createElement("div", { id: "child" }, ""),
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag")
  ]);
const root=ReactDOM.createRoot(document.getElementById("root"));  
root.render(parent)