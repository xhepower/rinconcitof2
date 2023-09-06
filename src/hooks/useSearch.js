import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";
//const handleClickBuscar = () => {};
function useSearch(props) {
  const { datos, setDatosBusqueda, datosBusqueda } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("todos");
  const [fechaFilter, setFechaFilter] = useState("todos");
  const [fechaDesde, setFechaDesde] = useState(new Date().now);
  const [fechaHasta, setFechaHasta] = useState(new Date().now);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    filtrar();
  };
  const onEstadoChange = (e) => {
    setEstadoValue(e.target.value);
  };
  const onFechaFilterChange = (e) => {
    setFechaFilter(e.target.value);
  };
  const onFechaDesdeChange = (e) => {
    setFechaDesde(e.target.value);
  };
  const onFechaHastaChange = (e) => {
    setFechaHasta(e.target.value);
  };
  const visibleIntervalo = () => {
    if (fechaFilter !== "intervalo") {
      return "intervaloHidden";
    } else {
      return null;
    }
  };
  const filtrar = (e) => {
    if (fechaFilter == "intervalo") {
      if (fechaDesde > fechaHasta) {
        alert("Los intervalos de fechas están mal colocados");
        return;
      }
    }
    setDatosBusqueda(
      datos
        .filter((item) => {
          if (searchValue == "") {
            return true;
          }
          return (
            item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
          );
        })
        .filter((item) => {
          if (fechaFilter == "todos") {
            return true;
          } else {
            if (item.date >= fechaDesde && item.date <= fechaHasta) {
              return true;
            } else {
              return false;
            }
          }
        })
        .filter((item) => {
          if (estadoValue == "todos") {
            return true;
          }
          return item.estado == estadoValue;
        })
    );
  };

  return {
    searchValue,
    onSearchValueChange,
    onFechaDesdeChange,
    onFechaFilterChange,
    fechaFilter,
    visibleIntervalo,
    onFechaHastaChange,
    onEstadoChange,
    filtrar,
    datosBusqueda,
    handleSubmit,
  };
}
export { useSearch };
