import React from "react";
import axios from "axios";
import { useState } from "react";

import {
  Label,
  Form,
  FormGroup,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const LoginFormModal = () => {
  const [modal, setModal] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nickname, password } = document.forms[0];
    const login = async () => {
      try {
        const response = await axios.post("http://localhost:4000/login", {
          nickname: nickname.value,
          password: password.value,
        });
        alert("acceso valido");
        const token = response.data;
        if (token) {
          localStorage.setItem("SoyElAdmin", true);
          setLogin(true);
        } else {
          localStorage.setItem("SoyElAdmin", false);
        }
      } catch (error) {
        alert("credenciales invalidas, intente nuevamente");
        console.log(error);
      }
    };
    login();
  };

  const handleRemoveAdmin = () => {
    localStorage.removeItem("SoyElAdmin");
    setLogin(false);
  };

  return (
    <>
      <Button onClick={toggle}>
        {isLogin ? "Cerrar sesión!" : "Iniciar sesión"}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
        </ModalHeader>
        <ModalBody>
          {isLogin ? (
            <>
              <p>¡Bienvenido!</p>
              <Button onClick={handleRemoveAdmin}>Cerrar sesión</Button>
            </>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="nickname">Nickname</Label>
                <Input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="Nickname"
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
              <Button type="submit">Iniciar sesión</Button>
            </Form>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default LoginFormModal;
