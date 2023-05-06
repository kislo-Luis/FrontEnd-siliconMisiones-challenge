import { NavLink } from "react-router-dom";
import { Navbar as NavbarReacstrap } from "reactstrap";
import { ButonModal } from "../Modal/ButonModal";

export const Navbar = () => {
  return (
    <div className="bar">
      <NavbarReacstrap>
        <NavLink to="/">
          <img
            alt="logo"
            src="/logo-small.jpeg"
            style={{ height: 50, width: 150 }}
          />
        </NavLink>

        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/cursosCrud">AdminCursos</NavLink>
        <ButonModal />
      </NavbarReacstrap>
    </div>
  );
};
