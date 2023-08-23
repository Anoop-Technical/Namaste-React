import React from "react";
import ReactDOM from "react-dom/client";



const title = (
    <h1 head="heading" tabIndex="5">
        Namaste React using JSX
    </h1>
);


const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
);

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

