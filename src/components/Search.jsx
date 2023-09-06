import React from "react";
import "../styles/Search.scss";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../hooks/useSearch";
function Search() {
  const {
    searchValue,
    onSearchValueChange,
    onFechaDesdeChange,
    onFechaFilterChange,
    fechaFilter,
    visibleIntervalo,
    onFechaHastaChange,
    onEstadoChange,
    filtrar,
    handleSubmit,
  } = useSearch();

  return (
    <>
      <form className="form form-busqueda" onSubmit={handleSubmit}>
        <div className="search-container search-params">
          <div className="search-group">
            <div className="text-container">
              <label htmlFor="textbusqueda">Búsqueda por nombre</label>
              <input
                type="text"
                id="textBusqueda"
                className="inputBusqueda"
                placeholder="Buscar por nombre"
                value={searchValue}
                onChange={onSearchValueChange}
              />
              {/* <button className="btnbuscar boton" type="button" onClick={filtrar}> */}
            </div>
          </div>
          <div className="search-group">
            <div className="select-group">
              <input
                type="radio"
                id="fechaTodos"
                name="fechaFilter"
                value="todos"
                onChange={onFechaFilterChange}
                checked={fechaFilter == "todos"}
              />
              <label htmlFor="fechaTodos">Todos</label>
            </div>
            <div className="select-group">
              <input
                type="radio"
                id="fechaIntervalo"
                name="fechaFilter"
                value="intervalo"
                onChange={onFechaFilterChange}
                checked={fechaFilter == "intervalo"}
              />
              <label htmlFor="fechaIntervalo">Intervalo</label>
              {/* <div className={`intervalo-group ${visibleIntervalo()}`}> */}
              <div className={`intervalo-group ${visibleIntervalo()}`}>
                {/* <label htmlFor="intervaloDesde">Desde</label>
                <br></br> */}
                <input
                  type="date"
                  id="intervaloDesde"
                  name="intervalo"
                  defaultValue="2022-01-01"
                  className="intervalo-hasta"
                  onChange={onFechaDesdeChange}
                />
                <br></br>
                <label htmlFor="intervaloHasta">a</label>
                <br></br>
                <input
                  type="date"
                  className="intervalo-hasta"
                  defaultValue="2022-01-01"
                  id="intervaloHasta"
                  name="intervalo"
                  onChange={onFechaHastaChange}
                />
              </div>
            </div>
          </div>
          <div className="search-group" hidden>
            <label>Estado de la solicitud</label>
            <select
              className="select-estado"
              name="select"
              defaultValue="todos"
              onChange={onEstadoChange}
            >
              <option value="todos">Todos</option>
              <option value="proceso">En proceso</option>
              <option value="embajada">En la embajada</option>
              <option value="recogido">Recogido</option>
            </select>
          </div>
        </div>
        <div className="search-container search-btn">
          <button className="btnbuscar boton" type="button" onClick={filtrar}>
            <FaSearch></FaSearch>
          </button>
          {/* <input type="submit" className="btnbuscar boton">
        <FaSearch></FaSearch>
      </input> */}
        </div>
      </form>
    </>
  );
}

export default Search;
