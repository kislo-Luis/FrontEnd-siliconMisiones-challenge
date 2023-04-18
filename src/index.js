import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./pages/login/Login";
import { Cursos } from "./pages/cursos/Cursos";
import { Home } from "./pages/home/Home";

import "bootstrap/dist/css/bootstrap.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
