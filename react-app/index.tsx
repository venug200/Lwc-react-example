import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles.css";

import { Hello } from "./components/Hello";

(window as any).mount = (el: any) => {
  ReactDOM.render(<Hello />, el);
};
