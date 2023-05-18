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

        <Button color="success" onClick={cursos}>
          {" "}
          Cursos{" "}
        </Button>
        <Button color="primary" onClick={cursosCrud}>
          {" "}
          Admin-cursos{" "}
        </Button>

        <ButonModal />
      </NavbarReacstrap>
    </div>
  );
};
