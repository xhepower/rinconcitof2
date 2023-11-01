import React, { useContext, useEffect, useState } from "react";
import IntoContext from "../context/IntoContext";
import EditForm from "../forms/IngredientEdit";
import "../styles/Item.scss";

function Item({ dato }) {
  const { itemFields, eliminar } = useContext(IntoContext);
  const dFields = Object.keys(dato);
  const iFields = Object.keys(itemFields);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const handleEliminar = () => {
    eliminar(dato.id);
  };
  const handleEditar = () => {
    setVisibleEdit(!visibleEdit);
  };
  let counter = 0;
  return (
    <div className="item">
      <div className="item-datos">
        {dFields.map((key) => {
          if (iFields.includes(key)) {
            counter++;
            return (
              <div className="item-fila" key={`id${dato.id}item${counter}`}>
                <p className="item-field">{itemFields[key]}:</p>
                <p className="item-key">{dato[key]}</p>
              </div>
            );
          }
        })}
      </div>
      {visibleEdit ? <EditForm dato={dato}></EditForm> : null}
      <div className="item-botones">
        <button className="button-editar button-primary" onClick={handleEditar}>
          Editar
        </button>
        <button
          className="button-eliminar button-secondary"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );

  //   fields.map((key) => {
  //     return (
  //       <option key={`searchFields${key}`} value={key}>
  //         {searchFields[key]}
  //       </option>
  //     );
  //   });
}

export default Item;
