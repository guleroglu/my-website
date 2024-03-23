import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";
import MainLayout from "./layouts/main/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <MainLayout />
  </RouterProvider>
);
