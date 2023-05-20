import React, { useState } from "react";
import axios from "axios";
import {
  Label,
  Form,
  FormGroup,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const LoginFormModal = () => {
  const [modal, setModal] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleConfirmModal = () => setConfirmModal(!confirmModal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nickname, password } = event.target.elements;
    try {
      const response = await axios.post("http://localhost:4000/login", {
        nickname: nickname.value,
        password: password.value,
      });
      alert("Acceso válido");
      localStorage.setItem("admin", true)
      const token = response.data;
      if (token) {
        console.log(token);
        localStorage.setItem("admin", true)
        setLogin(true);
        toggle(); 
      }
    } catch (error) {
      alert("Credenciales inválidas, intente nuevamente");
      console.log(error);
    }
  };
  const redirect = useNavigate();
  const handleRemoveAdmin = () => {
    localStorage.removeItem("admin");
    redirect("/");
    setLogin(false);
    toggleConfirmModal(); 
  };
  const handleLogout = () => {
    if (isLogin) {
      toggleConfirmModal(); 
    } else {
      toggle(); 
    }
  };
  return (
    <>
      <Button onClick={handleLogout}>
        {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
        </ModalHeader>
        <ModalBody>
          {isLogin ? (
            <>
              <p>¡...!</p>
            </>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="nickname">Nickname</Label>
                <Input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="Ingrese su Nickname"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Ingrese su contraseña"
                />
              </FormGroup>
                <Button type="submit" color="primary">Iniciar sesión</Button>{"  "}
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </Form>
          )}
        </ModalBody>
      </Modal>
      <Modal isOpen={confirmModal} toggle={toggleConfirmModal}>
          <ModalHeader toggle={toggleConfirmModal}>Confirmar cierre de sesión</ModalHeader>
                <ModalBody>¿Está seguro de que desea cerrar sesión?</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={handleRemoveAdmin}>Confirmar</Button>                              
                    </ModalFooter>
      </Modal>


  </>
  );
};
export default LoginFormModal;







