import React from "react";
import "../../../../assets/styles/Admin/Faculty/Visual/Header.css";
import { useNavigate } from "react-router";

export default function Header(props) {
  const navigate = useNavigate();
  const retroceder = () => {
    navigate("/faculty");
  };
  return (
    <div>
      <div className="contenedoTituloFacultyAdmin">
        <div className="primeraFilaVisualPart">
          <p className="editar">DETALLE DE FACULTAD</p>
          <button className="RetrocesoDetalle" onClick={retroceder}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
              className="imagenRetroceso"
            />
          </button>
        </div>
        <div>
          <hr color="black" className="lineaHorizontalFacultyAdmin" />
        </div>
      </div>
    </div>
  );
}
