import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

const CoursesCrud = () => {
  const columns = [
    {
      name: "Id:",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Nombre:",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Descripcion:",
      selector: (row) => row.descripcion,
      sortable: true,
    },

    {
      name: "año:",
      selector: (row) => row.anio,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: ({ id }) => (
        <>
          <Link to={`/edit/${id}`} className="btn btn-warning">
            Editar
          </Link>
         
          {"  "}
          <Button color="danger" onClick={() => handleDelete(id)}>
            Eliminar
          </Button>
        </>
      ),
    },
  ];

  const [courses, setListCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const url = "http://localhost:4000/cursos";
      const result = await axios.get(url);
      setListCourses(result.data);
    };
    getCourses();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/cursos/${id}`)
      .then((response) => {
        console.log(response);
        alert("se elimino con exito el curso");
        setListCourses(courses.filter((curso) => curso.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    anio: "" || 2023,
    activo: "" || true,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    try {
      axios({
        method: "post",
        url: "http://localhost:4000/cursos",
        data: form,
      });
      alert("registro creado");
      toggle();
      const getCourses = async () => {
        const url = "http://localhost:4000/cursos";
        const result = await axios.get(url);
        setListCourses(result.data);
      };
      getCourses();
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <>
      {courses.length === 0 && <p>cargando...</p>}

      <Button color="primary" onClick={toggle}>
        + Nuevo curso:
      </Button>
      <DataTable columns={columns} data={courses}></DataTable>

      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Crear nuevo curso</ModalHeader>
        <ModalBody>
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
        </ModalBody>

        <ModalFooter>
          <Button color="success" type="submit" onClick={handleSubmit}>
            confirmar datos{" "}
          </Button>
          {"  "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      
    </>
  );
};
export default CoursesCrud;
