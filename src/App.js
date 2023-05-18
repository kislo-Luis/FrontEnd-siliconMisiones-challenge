import { BrowserRouter,Routes,Route } from "react-router-dom";
//import { useState } from "react";
import { Home } from "./pages/home/Home";
import { Layout } from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import SiliCourses from "./pages/cursos/Silicourses";
import CoursesCrud from './pages/CRUD/CoursesCrud'
import EditCourses from "./pages/CRUD/EditCourses";
import LoginFormModal from "./pages/login/LoginFormModal";






function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<LoginFormModal />}/>
            <Route path="cursos" element={<SiliCourses />}/>
            <Route path="cursosCrud" element={<CoursesCrud />}/>            
            <Route path="/edit/:id" element={<EditCourses />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


// function App() {
//   return (
//     <div>
//       <App />
//     </div>
//   );
// }
// export default App;
