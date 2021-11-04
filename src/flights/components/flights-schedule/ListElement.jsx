import React from 'react';
import PropTypes from 'prop-types';

const ListElement = ({ value, classList, children }) => (
  <span className={`list-item-cell ${classList}`}>
    {children}
    {value}
  </span>
);

export default ListElement;

ListElement.propTypes = {
  value: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
