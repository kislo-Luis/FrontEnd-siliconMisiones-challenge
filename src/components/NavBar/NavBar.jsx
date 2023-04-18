import { NavLink } from "react-router-dom";
import {  Navbar as NavbarReacstrap } from "reactstrap";



export const NavBar = () => {
  return (

    
    <div className="bar">
      <NavbarReacstrap>
        <NavLink to="/home">
          <img
            alt="logo"
            src="/logo-small.jpeg"
            style={{ height: 50, width: 150 }}
          />
        </NavLink>

        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/">Nosotros</NavLink>
        <NavLink to="Login">Ingresar</NavLink>       

        <NavLink to="/Login">
          <img
            alt="logo"
            src="/icon-logo-circular.ico"
            style={{ height: 40, width: 40 }}
          />
        </NavLink>

       
        
        </NavbarReacstrap>    
        
    
       

    </div>
    
  );
};
