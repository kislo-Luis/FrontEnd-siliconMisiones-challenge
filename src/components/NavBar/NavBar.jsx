import { NavLink } from "react-router-dom";
import { Navbar as NavbarReacstrap, } from "reactstrap";
//import { useState } from "react";
import { ButonModal } from "../Modal/ButonModal";


export const Navbar = () => {
  // const [soyAdmin, setSoyAdmin]= useState(false);

  // const handleAdmin = ()=>{
  //   localStorage.setItem("SoyElAdmin", true);
  //   setSoyAdmin(true);
  // }
  // const [isLogin, setLogin] = useState(false);
  // const handleRemoveAdmin = () => {
  //   localStorage.removeItem("SoyElAdmin");
  //   setLogin(false);
  // };

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

        {/* <NavLink to="/Login">
          <img
            alt="logo"
            src="/icon-logo-circular.ico"
            style={{ height: 40, width: 40 }}
          />
        </NavLink>

        <Button onClick={handleRemoveAdmin}>cerrar todo</Button> */}

        {/* {soyAdmin?(
          
        ):(
          <Button onClick={handleAdmin}>PERMISOY EL ADMIN</Button>
        )} */}
      </NavbarReacstrap>
    </div>
  );
};
