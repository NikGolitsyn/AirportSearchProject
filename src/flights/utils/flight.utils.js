import moment from 'moment';

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
    `Landed ${moment(timeLandFact).format('H:mm')}`,
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
        flight.codeShareData.toLowerCase().includes(searchValue.toLowerCase()),
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

export const mapFlights = flightsArray => {
  const mapedArr = flightsArray.map(flight => {
    const flightDep = {
      id: flight.ID,
      term: flight.term,
      localTime: !flight['airportFromID.city_en'] ? flight.timeDepShedule : flight.timeToStand,
      airlineName: flight.airline.en.name,
      airlineLogo: flight.airline.en.logoSmallName,
      timeLandFact: flight.timeLandFact,
      airport: flight['airportToID.city_en'] || flight['airportFromID.city_en'],
      codeShareData: flight.codeShareData[0].codeShare,
      timeTakeofFact: flight.timeTakeofFact,
      timeDepShedule: flight.timeDepShedule,
      timeToStand: flight.timeToStand,
      status: flight.status,
    };
    return flightDep;
  });
  return mapedArr;
};
