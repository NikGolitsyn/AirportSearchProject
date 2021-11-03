import * as flightsGateway from './flightsGateway';
import { mapFlights } from './utils/flight.utils';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST/FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = (flightsList) => ({
  type: FLIGHTS_LIST_RECIEVED,
  payload: {
    flightsList,
  },
});

export const fetchFlights = flightsType => dispatch => {
  flightsGateway.fetchFlightsList().then(data => {
    if (flightsType.includes('departures')) {
      const todaysDepartureList = data.body.departure.filter(
        flight => new Date(flight.timeDepExpectCalc).getDate() === new Date().getDate(),
      );
      dispatch(flightsListRecieved(mapFlights(todaysDepartureList)));
    } else {
      const todaysArrivalList = data.body.arrival.filter(
        flight => new Date(flight.timeToStand).getDate() === new Date().getDate(),
      );
      dispatch(flightsListRecieved(mapFlights(todaysArrivalList)));
    }
  });
};
