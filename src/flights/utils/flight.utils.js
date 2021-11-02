import moment from 'moment';

export const currentDate = moment().format('DD-MM-YYYY');

const statusesAbbreviation = ['DP', 'CK', 'CC', 'ON', 'BD', 'GC', 'FR', 'LN', 'DL', 'CX'];

export const getFlightStatus = (status, timeTakeofFact, timeLandFact) => {
  const statusesValue = [
    `Departed at ${moment(timeTakeofFact).format('H:mm')}`,
    'Check-in',
    'Check-in closed',
    'On time',
    'Boarding',
    'Gate closed',
    'In flight',
    `Landed at ${moment(timeLandFact).format('H:mm')}`,
    'Departure is delayed',
    'Cancelled',
  ];

  const indexOfStatus = statusesAbbreviation.indexOf(status);

  return indexOfStatus === -1 ? status : statusesValue[indexOfStatus];
};

export const setFlights = (searchValue, sortedFlights) =>
  searchValue === ''
    ? sortedFlights
    : sortedFlights.filter(flight =>
        flight.codeShareData[0].codeShare.toLowerCase().includes(searchValue.toLowerCase()),
      );

export const preventUpdateDepartures = (event, pathname) => {
  if (!pathname.includes('/departures')) {
    return null;
  }

  return event.preventDefault();
};

export const preventUpdateArrivals = (event, pathname) => {
  if (!pathname.includes('/arrivals')) {
    return null;
  }
  return event.preventDefault();
};

export const listHeaderColumns = [
  { id: 'id-1', class: 'list-item-cell_terminal', name: 'Terminal' },
  { id: 'id-2', class: 'list-item-cell_time', name: 'Local time' },
  { id: 'id-3', class: 'list-item-cell_way', name: 'Destination' },
  { id: 'id-4', class: 'list-item-cell_status', name: 'Status' },
  { id: 'id-5', class: 'list-item-cell_airline', name: 'Airline' },
  { id: 'id-6', class: 'list-item-cell_flight', name: 'Flight' },
];
