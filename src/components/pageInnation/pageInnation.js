import { range } from "lodash";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import "./pageInnation.css";

const PageInnation = (props) => {
  const { setPage, totalPages, pageNo } = props;

  let ArrayOfPages = range(totalPages);
  let splitArray = ArrayOfPages.slice(0, 5);

  let handleClick = (p) => {
    console.log(p);
    setPage(p);
  };

  let handleNext = () => {};

  return (
    <div className="PageInnation">
      <Pagination className="style">
        <PaginationLink>Previous</PaginationLink>
        {splitArray.map((page, idx) => {
          return (
            <PaginationItem
              onClick={() => {
                handleClick(idx + 1);
              }}
              className={pageNo == idx + 1 ? "active" : ""}
            >
              <PaginationLink>{idx + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationLink onClick={handleNext}>Next</PaginationLink>
      </Pagination>
    </div>
  );
};
export default PageInnation;