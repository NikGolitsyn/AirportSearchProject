import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ inputToQueryParams, handleChange, inputFieldValue }) => (
  <form className="search-form" onSubmit={event => inputToQueryParams(event, inputFieldValue)}>
    <svg className="search__svg" viewBox="-512.053 29 44 43">
      <g transform="translate(-512.053 29)">
        <rect className="rectangle"></rect>
        <path
          d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
          transform="translate(-289.3 -45.625)"
          fill="#95989a"
        />
      </g>
    </svg>
    <input
      type="text"
      value={inputFieldValue}
      className="search-form__input"
      onChange={event => handleChange(event)}
      placeholder="Airlane, destination or flight #"
    />
    <button className="search-form__btn" type="submit">
      Search
    </button>
  </form>
);

export default SearchForm;

SearchForm.propTypes = {
  inputToQueryParams: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputFieldValue: PropTypes.string.isRequired,
};
