import React from 'react';
import PropTypes from 'prop-types';

const ListColumnHeader = ({ value, addClass }) => (
  <span className={`list-item-cell list-item-cell-header ${addClass}`}>{value}</span>
);

export default ListColumnHeader;

ListColumnHeader.propTypes = {
  value: PropTypes.string.isRequired,
  addClass: PropTypes.string.isRequired,
};
