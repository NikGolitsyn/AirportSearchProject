import { FLIGHTS_LIST_RECIEVED } from './flights.actions';

const initialState = {
  flightsList: [],
  flightsType: null,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED: {
      return {
        ...state,
        flightsList: action.payload.flightsList,
        flightsType: action.payload.flightsType,
      };
    }

    default:
      return state;
  }
};

export default flightsReducer;
