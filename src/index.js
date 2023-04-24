import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Layout } from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import SiliCourses from "./pages/cursos/Silicourses";
import CoursesCrud from './pages/CRUD/CoursesCrud'
import EditCourses from "./pages/CRUD/EditCourses";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cursos",
        element: <SiliCourses />,
      },

      
      {
        path: "/cursosCrud",
        element:  <CoursesCrud />
      },

      {
        path: "/edit/:id",
        element:  <EditCourses />
      },
      
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
