import React from "react";
import PropTypes from "prop-types";

const ListHeaderElement = ({ value, addClass }) => (
  <span className={`list-item-cell list-item-cell-header ${addClass}`}>
    {value}
  </span>
);

export default ListHeaderElement;

ListHeaderElement.propTypes = {
  value: PropTypes.string.isRequired,
  addClass: PropTypes.string.isRequired,
};
