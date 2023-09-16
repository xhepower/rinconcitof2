import React, { useContext } from "react";
import Elform from "../forms/User";
import IntoContext from "../context/IntoContext";
import Search from "../components/Search";

function Users(props) {
  const { datos } = useContext(IntoContext);
  console.log(datos);
  return (
    <>
      <Elform></Elform>
      <div className="lista">
        <Search></Search>
      </div>
    </>
  );
}

export default Users;
