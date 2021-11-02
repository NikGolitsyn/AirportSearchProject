import * as flightsGateway from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST/FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = (flightsList, flightsType) => ({
  type: FLIGHTS_LIST_RECIEVED,
  payload: {
    flightsList,
    flightsType,
  },
});

export const fetchFlights = flightsType => dispatch => {
  flightsGateway.fetchFlightsList().then(data => {
    if (flightsType === 'departures') {
      const todaysDepartureList = data.body.departure.filter(
        flight => new Date(flight.timeDepExpectCalc).getDate() === new Date().getDate(),
      );
      dispatch(flightsListRecieved(todaysDepartureList, 'departure'));
    } else {
      const todaysArrivalList = data.body.arrival.filter(
        flight => new Date(flight.timeToStand).getDate() === new Date().getDate(),
      );
      dispatch(flightsListRecieved(todaysArrivalList, 'arrival'));
    }
  });
};
