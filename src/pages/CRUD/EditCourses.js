import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ModalFooter, Label, Input, Form, FormGroup } from "reactstrap";
const url = "http://localhost:4000/cursos";

const EditCourses = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [anio, setAnio] = useState("");
  const [activo, setActivo] = useState("");
  const { id } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    const getCourse = async () => {
      const params = {
        headers: { "content-Type": "application/json" },
        params: { id: id },
      };
      const respuesta = await axios.get(url, params);
      setNombre(respuesta.data[0].name);
      setDescripcion(respuesta.data[0].descripcion);
      setAnio(respuesta.data[0].anio);
      setActivo(respuesta.data[0].activo);
    };
    getCourse();
  }, []);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(url, {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      anio: anio,
      activo: activo,
    });
    redirect("/cursosCrud");
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" placeholder="nombre" />
        </FormGroup>

        <FormGroup>
          <Label for="descripcion">Descripcion</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="descripcion"
          />
        </FormGroup>

        <FormGroup>
          <Label for="imagen">Imagen</Label>
          <Input type="text" name="imagen" id="imagen" placeholder="imagen" />
        </FormGroup>

        <FormGroup>
          <Label for="anio">Año</Label>
          <Input type="text" name="anio" id="anio" placeholder="anio" />
        </FormGroup>

        <FormGroup>
          <Label for="activo">Activo</Label>
          <Input type="text" name="activo" id="activo" placeholder="activo" />
        </FormGroup>
      </Form>

      <ModalFooter>
        <Button color="success" type="submit" onClickonClick={update}>
          confirmar datos{" "}
        </Button>
        {"  "}
        <Button color="secondary" onClick>
          Cancelar
        </Button>
      </ModalFooter>
    </div>
  );
};
export default EditCourses;
