import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Box, Heading, Subhead } from "rebass";
import ReactPageScroller from "react-page-scroller";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FirstComponent from "./FirstComponent copy 2";
import SecondComponent from "./SecondComponent copy 3";
import ThirdComponent from "./ThirdComponent copy 4";
import FourthComponent from "./FourthComponent copy";
import FifthComponent from "./FifthComponent";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(5);

  // const Pagination = ({ page, setActivePage, totalPages }) => {
  //   return (
  //     <ReactPaginate
  //       className="pagination mt-5 justify-content-center"
  //       previousClassName="page-item"
  //       nextClassName="page-item"
  //       pageClassName="page-item"
  //       pageLinkClassName="page-link"
  //       nextLinkClassName="page-link"
  //       previousLinkClassName="page-link"
  //       activeClassName="active"
  //       //   marginPagesDisplayed={10}
  //       onPageChange={(e) => setActivePage(e.selected + 1)}
  //       pageCount={5}
  //       // renderOnZeroPageCount={null}
  //     />
  //   );
  // };

  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          eventKey={i - 1}
          onClick={() => handlePageChange(i - 1)}
          active={i - 1 === currentPage}
        >
          {i}
        </Pagination.Item>
      );
    }

    return [...pageNumbers];
  };

  return (
    <React.Fragment>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <FirstComponent />

        <SecondComponent />

        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
      </ReactPageScroller>
      <Pagination className="pagination-additional-class" bsSize="large">
        {getPagesNumbers()}
      </Pagination>
      {/* <Pagination
        className="pagination-additional-class"
        totalPages={totalPages}
        setActivePage={(value) => {
          console.log(value);
          setCurrentPage(value);
        }}
      /> */}
    </React.Fragment>
  );
}

export default App;
