import React from "react";
import Search from "../components/Search";
import { useContext } from "react";
import Appcontext from "../context/AppContext";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
import { useToken } from "../hooks/useToken";
function Home() {
  const { datos, datosBusqueda } = useContext(Appcontext);
  const { obtenerToken } = useToken();
  const tokencito = obtenerToken();

  // const history = useHistory();
  if (!tokencito) {
    window.location.href = "/login";
  }
  return (
    <>
      <Search></Search>
      <Paginacion></Paginacion>
      <Lista></Lista>
    </>
  );
}

export default Home;
