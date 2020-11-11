import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

const rootElement: Element | null = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>,
    rootElement
);
