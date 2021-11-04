import React from 'react';
import ListElement from './ListElement.jsx';
import { listColumns } from '../../utils/styles.utils';

const ListHeader = () => (
  <li className="search-results__list-item search-results__list-item-header">
    {listColumns.map(column => (
      <ListElement key={column.id} classList={column.class} value={column.name} />
    ))}
  </li>
);

export default ListHeader;
