import React from "react";
import "./../styles/Layout.scss";
function Layout({ children }) {
  return <div className="contenedor">{children}</div>;
}

export default Layout;
