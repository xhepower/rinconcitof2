import React, { useContext } from "react";
import IntoContext from "../context/IntoContext";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Option from "../components/Option";
import * as yup from "yup";

function Client({ dato, setVisibleEdit }) {
  const { update } = useFormLogic();
  const actualizar = async (data) => {
    console.log(dato.id, data);
    await update(dato.id, data);
  };
  const { actualizarDatos, guardar, editar, isLoading } =
    useContext(IntoContext);
  const schema = yup.object().shape({
    price: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El precio es requerida"),
    stock: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El stock es requerida"),
    minimum: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El minimo es requerida"),
  });
  const defaultValues = {
    price: dato.price,
    stock: dato.stock,
    minimum: dato.minimum,
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const UnitService = new AppService("units");
  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(actualizar)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>

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
      <label htmlFor="stock" className="label">
        Stock
      </label>
      <input
        name="stock"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el stock"
        className="input input-email"
        {...register("stock")}
      />
      <p className="errors">{errors.stock?.message}</p>
      <label htmlFor="minimum" className="label">
        Minimo
      </label>
      <input
        name="minimum"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el minimo"
        className="input input-email"
        {...register("minimum")}
      />
      <p className="errors">{errors.minimum?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default Client;
