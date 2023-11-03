import React from "react";

function Detail(props) {
  const { AddForm, Grid, dato } = props;
  console.log(dato);
  const { id } = dato;
  return (
    <div className="detail">
      <AddForm id={id}></AddForm>
      <Grid datos={dato}></Grid>
    </div>
  );
}

export default Detail;
