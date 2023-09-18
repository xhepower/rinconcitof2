import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import IntoContext from "../context/IntoContext";
import {
  schema as searchSchema,
  defaultValues as searchDefault,
} from "../schemas/yup/Search.yup";
import { useContext } from "react";

function Search() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: searchDefault,
    resolver: yupResolver(searchSchema),
  });
  const { searchFields, setParameters, actualizarDatos } =
    useContext(IntoContext);
  const fields = Object.keys(searchFields);

  const filtrar = (data) => {
    const rta = {};
    if (data.searchText) {
      //console.log(data.searchText);
      rta[data.searchFields] = data.searchText;
    }
    setParameters(rta);
    (async () => {
      await actualizarDatos();
    })();
  };
  return (
    <form className="search" noValidate onSubmit={handleSubmit(filtrar)}>
      <input
        type="search"
        id="searchText"
        className="inputSearch"
        placeholder="Ingrese el termino de busqueda"
        {...register("searchText")}
      />

      <fieldset>
        <legend>
          <label className="label">Buscar por:</label>
        </legend>
        <select
          name="searchFields"
          //   value={filtroValue}
          //   onChange={onFiltroChange}
          className="filtro"
          {...register("searchFields")}
        >
          {fields.map((key) => {
            return (
              <option key={`searchFields${key}`} value={key}>
                {searchFields[key]}
              </option>
            );
          })}
        </select>
      </fieldset>
      <input type="submit" />
    </form>
  );
}

export default Search;
