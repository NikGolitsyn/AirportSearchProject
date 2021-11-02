import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { setFlights } from "../../utils/flight.utils";
import { sortedFlightsListSelector } from "../../flights.selectors";
import * as flightsActionCreator from "../../flights.actions";
import ListHeader from "./ListHeader";
import Flight from "./Flight";
import qs from "qs";

const FlightsList = ({ sortedFlights, getFlights }) => {
  const { flightsType } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    getFlights(flightsType);
  }, [flightsType]);

  const query = qs.parse(search.substr(1));
  const searchValue = query.search ? query.search : "";

  const flights = setFlights(searchValue, sortedFlights);

  if (flights.length === 0 && searchValue !== "") {
    return <div className="nothing-found">No flights</div>;
  }

  return (
    <div className="search-results">
      <ul className="search-results__list">
        <ListHeader />
        {flights.map((flight) => (
          <Flight
            key={flight.ID}
            cityTo={flight["airportToID.city_en"]}
            cityFrom={flight["airportFromID.city_en"]}
            {...flight}
          />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
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
