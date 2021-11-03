import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { setFlights } from '../../utils/flight.utils';
import { sortedFlightsListSelector } from '../../flights.selectors';
import * as flightsActionCreator from '../../flights.actions';
import ListHeader from './ListHeader.jsx';
import Flight from './Flight.jsx';

const FlightsList = ({ sortedFlights, getFlights }) => {
  const { search, pathname } = useLocation();

  useEffect(() => {
    getFlights(pathname);
  }, [pathname]);

  const query = qs.parse(search.substr(1));
  const searchValue = query.search ? query.search : '';

  if (!query.date) {
    return null;
  }

  const flights = setFlights(searchValue, sortedFlights);

  if (flights.length === 0 && searchValue !== '') {
    return <div className="nothing-found">No flights</div>;
  }

  return (
    <div className="search-results">
      <ul className="search-results__list">
        <ListHeader />
        {flights.map(flight => (
          <Flight key={flight.id} {...flight} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  sortedFlights: sortedFlightsListSelector(state),
});

const mapDispatch = {
  getFlights: flightsActionCreator.fetchFlights,
};

FlightsList.propTypes = {
  sortedFlights: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFlights: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(FlightsList);
