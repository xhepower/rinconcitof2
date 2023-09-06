import React, { useContext, useEffect, useState } from "react";
import Appcontext from "../context/AppContext";
import Spinner from "../components/Spinner";
import Item from "../components/Item";
import "./../styles/Lista.scss";
function Lista() {
  const [isLoading, setIsLoading] = useState(false);
  const { datosRender } = useContext(Appcontext);
  return (
    <div className="lista">
      {isLoading && <Spinner></Spinner>}
      {/* <p>{process.env.REACT_APP_HOST + "puto"}</p> */}
      <div className="lista-container">
        {datosRender.map((item) => {
          return <Item item={item} key={`item${item.id}`}></Item>;
        })}
      </div>
    </div>
  );
}

export default Lista;
