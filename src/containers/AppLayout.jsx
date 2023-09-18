import React, { useContext } from "react";
import { useToken } from "../hooks/useToken";
import IntoContext from "../context/IntoContext";
import { useApp } from "../hooks/useApp";
function AppLayout(props) {
  const {
    children,
    tabla,
    defaultValues,
    schema,
    searchFields,
    vDateSearch,
    pageLimit,
  } = props;
  const { obtenerToken } = useToken();
  const tokencito = obtenerToken();
  if (!tokencito) {
    window.location.href = "/login";
  }
  const appState = useApp({
    tabla,
    defaultValues,
    schema,
    searchFields,
    vDateSearch,
    pageLimit,
  });
  return (
    <IntoContext.Provider value={appState}>
      <div className="container">{children}</div>
    </IntoContext.Provider>
  );
  // return <div className="container">{children}</div>;
}

export default AppLayout;
