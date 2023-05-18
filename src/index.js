// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home } from "./pages/home/Home";
// import { Layout } from "./layout/Layout";
// import "bootstrap/dist/css/bootstrap.css";
// import SiliCourses from "./pages/cursos/Silicourses";
// import CoursesCrud from './pages/CRUD/CoursesCrud'
// import EditCourses from "./pages/CRUD/EditCourses";
// import LoginFormModal from "./pages/login/LoginFormModal";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     children: [
//       {
//         path: "/",        
//         element: <Home /> 
//       },
//       {
//         path: "/login",
//         element: <LoginFormModal />,
//       },
//       {
//         path: "/cursos",
//         element: <SiliCourses />,
//       },

      
//       {
//         path: "/cursosCrud",
//         element:  <CoursesCrud />
//       },

//       {
//         path: "/edit/:id",
//         element:  <EditCourses />
//       },
      
      
//     ],
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);


///////

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);
