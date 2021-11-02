import React from 'react';
import ListColumnHeader from './ListColumnHeader';
import { listHeaderColumns } from '../../utils/flight.utils';

const ListHeader = () => (
  <li className="search-results__list-item search-results__list-item-header">
    {listHeaderColumns.map(column => (
      <ListColumnHeader key={column.id} addClass={column.class} value={column.name} />
    ))}
  </li>
);

export default ListHeader;
