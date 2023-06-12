const heading = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id:"child"},[ 
React.createElement("h1", {id:"heading"}, "nesting elements in react."),React.createElement("h2", {id:"headings"}, "nesting elements1 in react.")]));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);