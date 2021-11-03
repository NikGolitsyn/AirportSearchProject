import { currentDate } from './utils/query.utils';

const baseUrl = `https://api.iev.aero/api/flights/${currentDate}`;

export const fetchFlightsList = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch data');
  });
