import ReactDOM from "react-dom";

/* importing layout to be render with react routers*/

import Layout from "./layout.js";

/* importing bootstrap to our bundle and general styles .scss */

import "bootstrap";
import "../styles/index.scss";

ReactDOM.render(<Layout />, document.getElementById("root"));
