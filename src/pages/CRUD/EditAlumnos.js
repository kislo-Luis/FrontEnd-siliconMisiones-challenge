import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ModalFooter, Label, Input, Form, FormGroup } from "reactstrap";
import "./EditCourses.css";

const EditAlumnos = () => {
  const { id } = useParams();
  const redirect = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",    
  });

  useEffect(() => {
    const url = `http://localhost:4000/alumnos/${id}`;
    const getCourse = async () => {
      const parami = {
        headers: { "content-Type": "application/json" },
        params: { id: id },
      };
      const response = await axios.get(url, parami);
      const { nombre, apellido, dni } = response.data;
      setForm({ nombre, apellido, dni});
    };
    getCourse();
  }, []);

  const url = `http://localhost:4000/alumnos/${id}`;
  const update = async (e) => {
    e.preventDefault();
    await axios.put(url, form, {
      headers: {
        "content-Type": "application/json",
      },
    });
    alert('Curso modificado con exito')    
    redirect("/alumnos");
  };

  const voltate = () => {
    redirect("/alumnos");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <>
    <div className="container">
      <Form >
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="apellido"
            value={form.apellido}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dni">DNI</Label>
          <Input
            type="text"
            name="dni"
            id="dni"
            placeholder="dni"
            value={form.dni}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
     
      <ModalFooter>
      <div className="buttons">
        <Button color="success" type="submit" onClick={update}>
          confirmar datos{" "}
        </Button>
      
        {"  "}
        <Button color="secondary" onClick={voltate}>
          Cancelar
        </Button>
      </div> 
      </ModalFooter>
      

      </div>
    </>
  );
};
export default EditAlumnos;
