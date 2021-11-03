import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FlightsList from './FlightsList.jsx';
import Search from '../search/Search.jsx';
import Navigation from '../navigation/Navigation.jsx';

const FlightsSchedule = () => {
  return (
    <>
      <div className="flights-navigation">
        <Search />
        <Navigation />
        <Switch>
          <Route path="/:flightsType" component={FlightsList} />
        </Switch>
      </div>
    </>
  );
};

export default FlightsSchedule;
