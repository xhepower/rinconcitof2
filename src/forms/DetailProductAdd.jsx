import React from "react";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import Option from "../components/Option";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
function DetailProductAdd(props) {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();
  const schema = yup.object().shape({
    productId: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El id propducto es requerida"),
    ingredientId: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El id ingredeinte es requerida"),
    quantity: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El id ingredeinte es requerida"),
  });
  const defaultValues = {
    productId: 0,
    ingredientId: 0,
    quantity: 0,
  };
  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>

      <label htmlFor="unitId" className="label">
        Categoria
      </label>
      <select
        name="idCategory"
        className="input input-email"
        {...register("idCategory")}
      >
        <Option tabla="categories" campo="name"></Option>
      </select>
      <p className="errors">{errors.unitId?.message}</p>
      <label htmlFor="price" className="label">
        Precio
      </label>
      <input
        name="price"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el precio"
        className="input input-email"
        {...register("price")}
      />
      <p className="errors">{errors.price?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default DetailProductAdd;
