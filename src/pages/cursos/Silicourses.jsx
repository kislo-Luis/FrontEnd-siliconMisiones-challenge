import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import "./Silicourses.css"




function SiliCourses() {
  const [courses, setListCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const url = "http://localhost:4000/cursos";
      const result = await axios.get(url);
      setListCourses(result.data);
    };
    getCourses();
  }, []);

  return (
    <div className="grid">
      
      <div className="cards-grid">        
        {courses.length === 0 && <p>cargando...</p>}
        {courses.map((curso, i) => (
          <Card
            key={curso.id}
            title={curso.nombre}
            content={curso.descripcion}
            img={curso.imagen||"code-card.jpg"}
            
            
          />
        ))}
      </div>
    </div>
  );
}
export default SiliCourses;

