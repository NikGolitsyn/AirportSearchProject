import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flights.flightsList;
export const searchFlightInputSelector = state => state.flights.searchInputValue;

export const filteredFlightsSelector = createSelector(
  [searchFlightInputSelector, flightsListSelector],
  (searchInputValue, flightsList) =>
    flightsList.filter(flight =>
      flight.codeShareData.toLowerCase().includes(searchInputValue.toLowerCase()),
    ),
);

export const sortedFlightsListSelector = createSelector([flightsListSelector], flightsList => flightsList
    .slice()
    .sort((a, b) => new Date(a.localTime).getTime() - new Date(b.localTime).getTime()));
