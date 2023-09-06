import React from "react";
import { useContext } from "react";
import Appcontext from "../context/AppContext";
import { FaEye } from "react-icons/fa";
import "../styles/Item.scss";
function Item(props) {
  const { item, eliminar } = props;
  console.log(item);
  //   address: "BARRIO EL CENTRO";
  //   city: "SN ANTONIO DEL NORTE";
  //   date: "2022-08-10T06:00:00.000Z";
  //   email: "angelaro3001@gmail.com";
  //   idNumber: "1705198400621";
  //   name: "MARIA ANGELA ROMERO ROMERO";
  //   passport: "E433001";

  //   phone: "97521128";
  const abrirPDF = () => {
    window.open(
      `http://${process.env.REACT_APP_HOST}:3000/api/v1/pdfs/archivos/${item.pdf}`,
      "_blank"
    );
  };
  return (
    <div className={"item"}>
      <div className="item-foto item-elemento">
        <img
          src={`http://${process.env.REACT_APP_HOST}:3000/api/v1/pdfs/photos/${item.pdf}`}
          alt="perfil"
          className="foto"
        ></img>
      </div>
      <div className="item-datos  item-elemento">
        <p className="datos-linea">
          <b className="datos-etiqueta">Id: </b> <br></br>
          <b className="datos-valor"> {item.id}</b>
        </p>
        <p className="datos-linea">
          <b className="datos-etiqueta">Nombre: </b> <br></br>
          <b className="datos-valor"> {item.name}</b>
        </p>
        <p className="datos-linea">
          <b className="datos-etiqueta">Identidad: </b> <br></br>
          <b className="datos-valor"> {item.idNumber}</b>
        </p>
        <p className="datos-linea">
          <b className="datos-etiqueta">Pasaporte: </b> <br></br>
          <b className="datos-valor"> {item.passport}</b>
        </p>
        <div className="datos-oculto">
          <p className="datos-linea">
            <b className="datos-etiqueta">Telefono: </b> <br></br>
            <b className="datos-valor"> {item.phone}</b>
          </p>
          <p className="datos-linea">
            <b className="datos-etiqueta">Ciudad: </b> <br></br>
            <b className="datos-valor"> {item.city}</b>
          </p>
          <p className="datos-linea">
            <b className="datos-etiqueta">Direccion: </b> <br></br>
            <b className="datos-valor"> {item.address}</b>
          </p>
          <p className="datos-linea">
            <b className="datos-etiqueta">Computadora: </b> <br></br>
            <b className="datos-valor"> {item.computadora}</b>
          </p>
          <p className="datos-linea">
            <b className="datos-etiqueta">Oficina: </b> <br></br>
            <b className="datos-valor"> {item.oficina}</b>
          </p>
        </div>
      </div>
      <div className="item-actions  item-elemento">
        <button className="btnbuscar btnVer" onClick={abrirPDF}>
          <FaEye></FaEye>
        </button>
      </div>
    </div>
  );
}

export default Item;
