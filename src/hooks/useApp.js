import { useEffect, useState, useContext } from "react";
import AppService from "../services/App.service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function useApp(props) {
  const [schema, setSchema] = useState(props.schema);
  const [pageLimit, setPageLimit] = useState(props.pageLimit);
  const [searchTopics, setSearchTopics] = useState(props.pageLimit);
  const [defaultValues, setDefaultValues] = useState(props.defaultValues);
  const [tabla, setTabla] = useState(props.tabla);
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Service = new AppService(tabla);
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

  const save = async (data) => {
    setIsLoading(true);

    try {
      //data.idUser = currentUser;
      const rta = await guardar(data);
      reset();
      actualizarDatos();
      setIsLoading(false);
      return rta;
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  useEffect(() => {
    actualizarDatos();
  }, []);
  const actualizarDatos = async () => {
    setIsLoading(true);
    try {
      setDatos((await Service.getAll()).data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };

  const dato = async (id) => {
    return await Service.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el registro #${id}?`)) {
      (async () => {
        Service.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el registro?")) {
      try {
        await Service.save(data);
        setDatos((await Service.getAll()).data);
      } catch (error) {}
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
    setDatosRender,
    datosRender,
    currentData,
    setCurrentData,
    dato,
    actualizar,
    eliminar,
    guardar,
    actualizarDatos,
    handleSubmit,
    save,
    register,
    errors,
    isLoading,
    schema,
    setSchema,
    defaultValues,
    setDefaultValues,
    tabla,
    setTabla,
    pageLimit,
    setPageLimit,
  };
}

export { useApp };
