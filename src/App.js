import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Layout } from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import SiliCourses from "./pages/cursos/Silicourses";
import CoursesCrud from './pages/CRUD/CoursesCrud'
import EditCourses from "./pages/CRUD/EditCourses";
import LoginFormModal from "./pages/login/LoginFormModal";
import { AlumnosCrud } from "./pages/CRUD/AlumnosCrud";
import EditAlumnos from "./pages/CRUD/EditAlumnos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginFormModal />} />
          <Route path="cursos" element={<SiliCourses />} />
          <Route path="cursosCrud" element={<CoursesCrud />} />
          <Route path="/edit/:id" element={<EditCourses />} />
          <Route path="alumnos" element={<AlumnosCrud />} />
          <Route path="/edit-alumnos/:id" element={<EditAlumnos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;



