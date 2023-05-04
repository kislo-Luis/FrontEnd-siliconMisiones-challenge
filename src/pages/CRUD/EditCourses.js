import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ModalFooter, Label, Input, Form, FormGroup } from "reactstrap";

const EditCourses = () => {
  const { id } = useParams();
  const redirect = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    anio: "",
    activo: "",
  });

  useEffect(() => {
    const url = `http://localhost:4000/cursos/${id}`;
    const getCourse = async () => {
      const parami = {
        headers: { "content-Type": "application/json" },
        params: { id: id },
      };
      const response = await axios.get(url, parami);
      const { nombre, descripcion, imagen, anio, activo } = response.data;
      setForm({ nombre, descripcion, imagen, anio, activo });
    };
    getCourse();
  }, []);

  const url = `http://localhost:4000/cursos/${id}`;
  const update = async (e) => {
    e.preventDefault();
    await axios.put(url, form, {
      headers: {
        "content-Type": "application/json",
      },
    });
    alert('Curso modificado con exito')    
    redirect("/cursosCrud");
  };

  const voltate = () => {
    redirect("/cursosCrud");
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
      <Form>
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
          <Label for="descripcion">Descripcion</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="imagen">Imagen</Label>
          <Input
            type="text"
            name="imagen"
            id="imagen"
            placeholder="imagen"
            value={form.imagen}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="anio">Año</Label>
          <Input
            type="text"
            name="anio"
            id="anio"
            placeholder="anio"
            value={form.anio}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="activo">Activo</Label>
          <Input
            type="text"
            name="activo"
            id="activo"
            placeholder="activo"
            value={form.activo}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>

      <ModalFooter>
        <Button color="success" type="submit" onClick={update}>
          confirmar datos{" "}
        </Button>
        {"  "}
        <Button color="secondary" onClick={voltate}>
          Cancelar
        </Button>
      </ModalFooter>
    </>
  );
};
export default EditCourses;
