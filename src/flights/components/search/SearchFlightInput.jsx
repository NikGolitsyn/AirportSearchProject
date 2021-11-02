import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { currentDate } from '../../utils/flight.utils';
import SearchForm from './SearchForm.jsx';

const qs = require('qs');

const SearchFlightInput = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const query = qs.parse(search.substr(1));
  const initialInputValue = query.search ? query.search : '';
  const [inputFieldValue, setInputFieldValue] = useState(initialInputValue);


  const handleChange = event => {
    setInputFieldValue(event.target.value);
  };

  const inputToQueryParams = (event, input) => {
    event.preventDefault();
    query.search = input;
    query.date = currentDate;

    const string = query.search !== '' ? qs.stringify(query) : '';

    history.push({ pathname, search: string });
  };

  useEffect(() => {
    query.search = inputFieldValue;
    query.date = currentDate;

    const string = query.search !== '' ? qs.stringify(query) : '';

    history.push({
      pathname,
      search: string,
    });
  }, [pathname]);

  return (
    <SearchForm
      handleChange={handleChange}
      inputToQueryParams={inputToQueryParams}
      inputFieldValue={inputFieldValue}
    />
  );
};

export default SearchFlightInput;
