import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";
import Service from "../services/app.service";
//import { useToken } from "./useToken";
const useInitialState = () => {
  const { token, setToken, removerToken, guardarToken } = useToken();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [datos, setDatos] = useState([]);
  const [datosBusqueda, setDatosBusqueda] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  useEffect(() => {
    (async () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        setCurrentUser(decodedToken.sub);
        setCurrentRole(decodedToken.role);
        actualizarDatos();
      }
    })();
  }, [token]);
  const actualizarDatos = () => {
    (async () => {
      try {
        setDatos(
          (await Service.getAll()).data
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()
        );
        setDatosBusqueda(
          (await Service.getAll()).data
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()
        );
      } catch (error) {}
    })();
  };
  return {
    currentUser,
    setCurrentUser,
    currentRole,
    setCurrentRole,
    token,
    setToken,
    guardarToken,
    removerToken,
    isLogged,
    setIsLogged,
    datos,
    setDatos,
    datosBusqueda,
    setDatosBusqueda,
    datosRender,
    setDatosRender,
  };
};

export default useInitialState;
