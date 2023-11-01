import React from "react";
import { useState } from "react";
import useFormLogic from "../hooks/useFormLogic";
import { useEffect } from "react";

function Option({ tabla, campo }) {
  const { llenadoCmb } = useFormLogic();
  const [cmb, setCmb] = useState([]);
  useEffect(() => {
    (async () => {
      const cmbUnit = await llenadoCmb(tabla, campo);
      setCmb(cmbUnit);
    })();
  }, [tabla, campo]);

  const ujum = cmb ? (
    cmb.map((item) => {
      return <option value={item.id}>{item.campo} </option>;
    })
  ) : (
    <></>
  );

  return ujum;
}

export default Option;
