/*
    <div id="parent">
        <div id="child">
            <h1>i am a h1 tag</h1>
            <h2>this is h2 tag</h2>
        </div>
        <div id="child2">
            <h1>i am a h1 tag</h1>
            <h2>this is h2 tag</h2>
        </div>
    </div>

    ReactElement(Object) => HTML(Browser Understands)
*/


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am a h1 tag"), React.createElement("h2", {}, "i am a h1 tag")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "i am a h1 tag"), React.createElement("h2", {}, "i am a h1 tag")]
    )]
);

// After that messing code above need jsx come in to the picture and say bye-2 to React Create Element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
