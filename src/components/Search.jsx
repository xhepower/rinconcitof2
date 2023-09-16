import React from "react";

function Search() {
  const filtrar = (e) => {
    e.preventDefault();
    console.log("puto");
  };
  return (
    <form className="search" onSubmit={filtrar}>
      <input
        type="search"
        id="textBusquedaPrestamos"
        className="inputBusqueda"
        placeholder="Ingrese el termino de busqueda"
        //   value={searchValue}
        //   onChange={onSearchValueChange}
        onSubmit={filtrar}
      />

      <fieldset>
        <legend>
          <label className="label">Buscar por:</label>
        </legend>
        <select
          name="filtro"
          //   value={filtroValue}
          //   onChange={onFiltroChange}
          className="filtro"
        >
          {/* {opciones.map((item) => {
        return <option key={`option${item}`}>{item}</option>;
      })} */}
        </select>
      </fieldset>
      <button
        className="btnbuscar boton"
        type="button"
        value="aja"
        onClick={filtrar}
      >
        {/* <span className="icon">
          <i className="fa fa-search"></i>
        </span> */}
        aja
      </button>
    </form>
  );
}

export default Search;
