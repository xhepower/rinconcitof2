import React, { useContext, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import "../styles/Item.scss";
function Item({ dato }) {
  const { itemFields, eliminar } = useContext(IntoContext);
  const dFields = Object.keys(dato);
  const iFields = Object.keys(itemFields);
  const handleEliminar = () => {
    eliminar(dato.id);
  };
  return (
    <div className="item">
      <div className="item-datos">
        {dFields.map((key) => {
          if (iFields.includes(key)) {
            return (
              <div className="item-fila">
                <p className="item-field">{itemFields[key]}:</p>
                <p className="item-key">{dato[key]}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="item-botones">
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
