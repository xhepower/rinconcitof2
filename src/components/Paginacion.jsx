import React, { useState, useEffect } from "react";
import Appcontext from "../context/AppContext";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import "./../styles/Paginacion.scss";
function Paginacion(props) {
  const PAGE_LIMIT = 20;
  const { datosBusqueda, datos, setDatosRender, datosRender } =
    useContext(Appcontext);
  // const { datosBusqueda, pageLimit, pageNeighbours, setFile, archivos } = props;
  const totalRecords = datos.length;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(datosBusqueda.length / PAGE_LIMIT)
  );
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + PAGE_LIMIT;
    setDatosRender(datosBusqueda.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(datosBusqueda.length / PAGE_LIMIT));
  }, [itemOffset, PAGE_LIMIT, datosBusqueda]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * PAGE_LIMIT) % datosBusqueda.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="paginacion-container">
      <div className="paginacion">
        <p className="datos-cantidad">
          Archivos {datosBusqueda.length}/{datos.length}
        </p>
        <ReactPaginate
          nextLabel="Sig >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< Ant"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Paginacion;
