import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
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

export const AlumnosCrud = () => {
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
      name: "Apellido:",
      selector: (row) => row.apellido,
      sortable: true,
    },

    {
      name: "DNI:",
      selector: (row) => row.dni,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: ({ id }) => (
        <>
          <Link to={`/edit-alumnos/${id}`} className="btn btn-success">
            Editar
          </Link>

          {"  "}
          <Button color="danger" onClick={() =>handleDelete(id)}>
            Eliminar
          </Button>
        </>
      ),
    },
  ];

  const [alumnos, setListAlumnos] = useState([]);
  useEffect(() => {
    const getAlumnos = async () => {
      const url = "http://localhost:4000/alumnos";
      const result = await axios.get(url);
      setListAlumnos(result.data);
    };
    getAlumnos();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/alumnos/${id}`)
      .then((response) => {
        console.log(response);
        alert("se elimino con exito el curso");
        setListAlumnos(alumnos.filter((alumno) => alumno.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",    
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
        url: "http://localhost:4000/alumnos",
        data: form,
      });
      alert("registro creado");
      toggle();
      const getAlumnos = async () => {
        const url = "http://localhost:4000/alumnos";
        const result = await axios.get(url);
        setListAlumnos(result.data);
      };
      getAlumnos();
    } catch (error) {
      console.error(error);
    }
  };

  if (localStorage.getItem("admin")===null){
    alert("Debe iniciar sesión para acceder")
    return <Navigate to="/"/>
    ;
  }  
  return (
    <>
      {alumnos.length === 0 && <p>cargando...</p>}
      
      <div className="container">
        <div className="button">
          <Button color="warning" onClick={toggle}>
            + Nuevo alumno:
          </Button>
         
        </div>

        <div className="table">
          <DataTable columns={columns} data={alumnos} fixedHeader></DataTable>
        </div>
      </div>

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
              <Label for="apellido ">Apellido</Label>
              <Input
                type="apellido"
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
