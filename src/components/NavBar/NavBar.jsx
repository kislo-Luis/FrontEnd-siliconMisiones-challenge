import { NavLink, useNavigate } from "react-router-dom";
import { Navbar as NavbarReacstrap, Button } from "reactstrap";
import { ButonModal } from "../Modal/ButonModal";

export const Navbar = () => {
  const redirect = useNavigate();
  const cursos = () => {
    redirect("/cursos");
  };

  const cursosCrud = () => {
    redirect("/cursosCrud");
  };
  const alumnosCrud = () => {
    redirect("/alumnos");
  };

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

        <Button color="primary" onClick={cursos}>
          {" "}
          Cursos{" "}
        </Button>
        <Button color="primary" onClick={cursosCrud}>
          {" "}
          Admin-cursos{" "}
        </Button>
        <Button color="primary" onClick={alumnosCrud}>
          {" "}
          Alumnos{" "}
        </Button>

        <ButonModal />
      </NavbarReacstrap>
    </div>
  );
};
