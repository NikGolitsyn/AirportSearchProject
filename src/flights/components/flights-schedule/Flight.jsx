import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { getFlightStatus } from '../../utils/flight.utils';
import { selectClass } from '../../utils/styles.utils';

const Flight = ({
  term,
  timeDepShedule,
  airline,
  timeLandFact,
  cityTo,
  cityFrom,
  codeShareData,
  timeTakeofFact,
  timeToStand,
  status,
}) => {
  if (!airline) {
    return null;
  }

  return (
    <li className="search-results__list-item">
      <span className="list-item-cell list-item-cell_terminal">
        <span
          className={`list-item-cell_term ${selectClass(
            'list-item-cell_term-A',
            'list-item-cell_term-B',
            term !== 'A',
          )}`}
        >
          {term}
        </span>
      </span>
      <span className="list-item-cell list-item-cell_time">
        {!cityFrom ? moment(timeDepShedule).format('H:mm') : moment(timeToStand).format('H:mm')}
      </span>
      <span className="list-item-cell list-item-cell_way">
        {cityTo}
        {cityFrom}
      </span>
      <span className="list-item-cell list-item-cell_status">
        {getFlightStatus(status, timeTakeofFact, timeLandFact)}
      </span>
      <span className="list-item-cell list-item-cell_airline">
        <img className="list-item-cell_logo" src={airline.en.logoSmallName} />
        {airline.en.name}
      </span>
      <span className="list-item-cell list-item-cell_flight">{codeShareData[0].codeShare}</span>
    </li>
  );
};

export default Flight;

Flight.propTypes = {
  term: PropTypes.string.isRequired,
  timeDepShedule: PropTypes.string,
  timeLandFact: PropTypes.string,
  timeTakeofFact: PropTypes.string,
  timeToStand: PropTypes.string,
  airline: PropTypes.object,
  cityTo: PropTypes.string,
  cityFrom: PropTypes.string,
  codeShareData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  status: PropTypes.string.isRequired,
};
