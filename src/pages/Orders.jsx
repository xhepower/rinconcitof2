import React, { useContext, useEffect, useState } from "react";
import Elform from "../forms/Order";
//import EditForm from "../forms/OrderEdit";
//import Grid from "../components/OrderGrid";
//import AddForm from "../forms/DetailOrderAdd";
import IntoContext from "../context/IntoContext";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import List from "../components/List";
import PopUp from "../components/PopUp";
import DetailOrderAdd from "../forms/DetailOrderAdd";
function Products(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const { datos, tabla } = useContext(IntoContext);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleVisibleAdd = () => {
    setVisibleAdd(!visibleAdd);
    setItems([]);
  };
  const calcularTotal = () => {
    let eltotal = 0;
    if (items) {
      items.map((item) => {
        console.log(item, "item");
        eltotal = eltotal + item.price * item.quantity;
      });
    }
    console.log(eltotal);
    return setTotal(eltotal);
  };
  useEffect(() => {
    calcularTotal();
  }, []);

  return (
    <div className="page">
      <div className="sticky-area">
        <div className="add-area">
          <button className="button-add" onClick={handleVisibleAdd}>
            Agregar
          </button>
          {visibleAdd ? (
            <Elform
              items={items}
              setItems={setItems}
              setOpenModal={setOpenModal}
              total={total}
              setTotal={setTotal}
            ></Elform>
          ) : null}
        </div>
        <Search></Search>
        <Pagination></Pagination>
      </div>

      {datos ? (
        <div className="lista">
          <List EditForm={null} AddForm={null} Grid={null}></List>
        </div>
      ) : (
        <p>"No hay nada</p>
      )}
      {openModal && (
        <PopUp setOpenModal={setOpenModal}>
          <DetailOrderAdd
            items={items}
            setItems={setItems}
            total={total}
            setTotal={setTotal}
          ></DetailOrderAdd>
        </PopUp>
      )}
    </div>
  );
}

export default Products;
