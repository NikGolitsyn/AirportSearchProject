import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DeparturesButton from './DeparturesButton.jsx';
import ArrivalsButton from './ArrivalsButton.jsx';
import { preventUpdateDepartures, preventUpdateArrivals } from '../../utils/flight.utils';

const Navigation = () => {
  const { pathname, search } = useLocation();

  return (
    <div className="navigation">
      <Link
        to={{
          pathname: '/departures',
          search,
        }}
        onClick={event => preventUpdateDepartures(event, pathname)}
      >
        <DeparturesButton />
      </Link>
      <Link
        to={{
          pathname: '/arrivals',
          search,
        }}
        onClick={event => preventUpdateArrivals(event, pathname)}
      >
        <ArrivalsButton />
      </Link>
    </div>
  );
};

export default Navigation;
