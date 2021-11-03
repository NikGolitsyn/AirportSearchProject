import qs from 'qs';
import moment from 'moment';

export const currentDate = moment().format('DD-MM-YYYY');

export const setQueryParams = (query, inputFieldValue) => {
  const obj = { ...query };
  obj.search = inputFieldValue;
  obj.date = currentDate;

  return obj.search !== '' ? qs.stringify(obj) : `date=${obj.date}`;
};


