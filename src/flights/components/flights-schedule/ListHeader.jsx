import React from "react";
import ListHeaderElement from "./ListHeaderElement";
import { listHeaderColumns } from "../../utils/flight.utils";

const ListHeader = () => (
  <li className="search-results__list-item search-results__list-item-header">
    {listHeaderColumns.map((column) => (
      <ListHeaderElement
        key={column.id}
        addClass={column.class}
        value={column.name}
      />
    ))}
  </li>
);

export default ListHeader;
