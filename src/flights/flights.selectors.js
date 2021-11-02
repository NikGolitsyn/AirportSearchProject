import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flights.flightsList;
export const flightsTypeSelector = state => state.flights.flightsType;
export const searchFlightInputSelector = state => state.flights.searchInputValue;

export const filteredFlightsSelector = createSelector(
  [searchFlightInputSelector, flightsListSelector],
  (searchInputValue, flightsList) =>
    flightsList.filter(flight =>
      flight.codeShareData[0].codeShare.toLowerCase().includes(searchInputValue.toLowerCase()),
    ),
);

export const sortedFlightsListSelector = createSelector(
  [flightsListSelector, flightsTypeSelector],
  (flightsList, flightsType) => {
    if (flightsType === 'arrival') {
      return flightsList
        .slice()
        .sort((a, b) => new Date(a.timeToStand).getTime() - new Date(b.timeToStand).getTime());
    }
    return flightsList
      .slice()
      .sort((a, b) => new Date(a.timeDepShedule).getTime() - new Date(b.timeDepShedule).getTime());
  },
);
