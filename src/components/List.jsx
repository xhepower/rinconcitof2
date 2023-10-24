import React, { useContext, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import Item from "./Item";
import "../styles/ListContainer.scss";
function List() {
  const { datos, tabla } = useContext(IntoContext);
  useEffect(() => {}, [tabla, datos]);
  return (
    <div className="list-container">
      {datos.map((dato) => {
        return <Item key={`list${tabla}id${dato.id}`} dato={dato}></Item>;
      })}
    </div>
  );
}

export default List;
