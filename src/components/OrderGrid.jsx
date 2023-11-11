import React, { useState } from "react";
import AppService from "../services/App.service";
import "../styles/GridForm.scss";
import { useEffect } from "react";
function OrderGrid({ items, setItems, total, setTotal }) {
  const service = new AppService("products");
  const [datos, setdatos] = useState([]);
  const borrarItem = async (id) => {
    let rta = window.confirm(`¿Dese eliminar el producto #${id}`);
    if (rta) {
      let nItems = items.filter((item) => {
        return item.productId !== id;
      });
      setItems(nItems);
    }
  };
  const getName = (id) => {
    let nombre;
    (async () => {
      nombre = await (await service.getOne(id)).data.name;
    })();
  };
  useEffect(() => {}, [items, total]);

  return (
    <table className="table-details">
      <tr className="table-row ">
        <th className="grid-item table-header">Producto </th>
        <th className="grid-item table-header">Cantidad</th>
        <th className="grid-item table-header">Precio</th>
        <th className="grid-item table-header">Subtotal</th>
        <th className="grid-item table-header">Borrar</th>
      </tr>
      {items
        ? items.map((item) => {
            return (
              <tr className="table-row">
                <td className="grid-item">{item.name} </td>
                <td className="grid-item">{item.quantity}</td>
                <td className="grid-item">{item.price}</td>
                <td className="grid-item">{item.quantity * item.price}</td>
                <td className="grid-item">
                  <button
                    className="btn-secondary bt-delete.item"
                    type="button"
                    onClick={() => {
                      borrarItem(item.productId);
                    }}
                  >
                    Borrar item
                  </button>
                </td>
              </tr>
            );
          })
        : null}
      <tr>
        <th className="grid-item table-header" colspan="3">
          Total
        </th>
        <th className="grid-item table-header">{total}</th>
        <td></td>
      </tr>
    </table>
  );
}

export default OrderGrid;
