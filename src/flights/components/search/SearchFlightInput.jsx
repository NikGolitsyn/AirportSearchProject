import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { setQueryParams } from '../../utils/query.utils';
import SearchForm from './SearchForm.jsx';

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

    history.push({ pathname, search: setQueryParams(query, input) });
  };

  useEffect(() => {
    history.push({
      pathname,
      search: setQueryParams(query, inputFieldValue),
    });
  }, [pathname, query.search]);

  return (
    <SearchForm
      handleChange={handleChange}
      inputToQueryParams={inputToQueryParams}
      inputFieldValue={inputFieldValue}
    />
  );
};

export default SearchFlightInput;
