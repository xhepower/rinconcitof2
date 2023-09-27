import React, { useContext, useEffect } from "react";
import { useToken } from "../hooks/useToken";
import IntoContext from "../context/IntoContext";
import { useApp } from "../hooks/useApp";
import NavApp from "../components/NavApp";
import "../styles/Container.scss";
import "../styles/Page.scss";
import "../styles/Lista.scss";
function AppLayout(props) {
  useEffect(() => {}, [props]);

  const {
    children,
    tabla,
    defaultValues,
    schema,
    searchFields,
    vDateSearch,
    pageLimit,
    itemFields,
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
    itemFields,
    vDateSearch,
    pageLimit,
  });
  return (
    <IntoContext.Provider value={appState}>
      <div className="container into-container">
        <NavApp>{children}</NavApp>
        {children}
      </div>
    </IntoContext.Provider>
  );
  // return <div className="container">{children}</div>;
}

export default AppLayout;
