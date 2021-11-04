import classNames from 'classnames';

export const selectClass = (className, classNameActive, boolean) =>
  classNames(className, { [classNameActive]: boolean });

export const listColumns = [
  {
    id: 'id-1',
    class: 'list-item-cell_terminal list-item-cell-header',
    name: 'Terminal',
  },
  {
    id: 'id-2',
    class: 'list-item-cell_time list-item-cell-header',
    name: 'Local time',
  },
  {
    id: 'id-3',
    class: 'list-item-cell_way list-item-cell-header',
    name: 'Destination',
  },
  {
    id: 'id-4',
    class: 'list-item-cell_status',
    name: 'Status',
  },
  {
    id: 'id-5',
    class: 'list-item-cell_airline',
    name: 'Airline',
  },
  {
    id: 'id-6',
    class: 'list-item-cell_flight list-item-cell-header',
    name: 'Flight',
  },
];
