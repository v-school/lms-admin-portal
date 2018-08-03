import React from 'react';
import { render } from 'react-dom';


import App from "./App";

import { Provider } from "riddl-js";
import globalState from "./riddl";

render(
    <Provider globalState={globalState}>
        <App />
    </Provider>
    , document.getElementById("root"));