import React from "react";
import ReactDOMClient from "react-dom/client";
import { WorkHome } from "./screens/WorkHome";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WorkHome />);
