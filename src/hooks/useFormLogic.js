import React, { useContext, useState, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function useFormLogic() {
  const { defaultValues, schema, actualizarDatos, guardar } =
    useContext(IntoContext);
  const [isLoading, setIsLoading] = useState(false);

  const save = async (data) => {
    setIsLoading(true);

    try {
      let rta;
      //data.idUser = currentUser;
      if (window.confirm("¿Desea guardar el registro?")) {
        rta = await guardar(data);
        reset();
        actualizarDatos();
      }
      setIsLoading(false);
      return rta;
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
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
  return { handleSubmit, save, isLoading, errors, register };
}

export default useFormLogic;
