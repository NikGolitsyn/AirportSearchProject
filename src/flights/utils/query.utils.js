import qs from 'qs';

export const setQueryParams = (query, inputFieldValue, currentDate) => {
  const obj = {...query}
  obj.search = inputFieldValue;
  obj.date = currentDate;

  return obj.search !== '' ? qs.stringify(obj) : `date=${obj.date}`;
};
