import React, { useContext, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import Item from "./Item";
import "../styles/ListContainer.scss";
function List() {
  const { datos } = useContext(IntoContext);

  return (
    <div className="list-container">
      {datos.map((dato) => {
        return <Item key={`dato${dato.id}`} dato={dato}></Item>;
      })}
    </div>
  );
}

export default List;
