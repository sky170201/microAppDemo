import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}
function render(props) {
    const { container } = props;
    ReactDOM.render(
        <App />,
        container
            ? container.querySelector("#root")
            : document.getElementById("root")
    );
}

export async function bootstrap() {
    console.log("reat app bootstrap");
}
export async function mount(props) {
    render(props);
}
export async function unmount() {
    console.log("reat app unmount");
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}
