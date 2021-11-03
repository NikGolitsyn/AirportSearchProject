import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { getFlightStatus } from '../../utils/flight.utils';
import { selectClass } from '../../utils/styles.utils';

const Flight = ({
  term,
  airlineLogo,
  airlineName,
  timeLandFact,
  airport,
  codeShareData,
  timeTakeofFact,
  localTime,
  status,
}) => {
  if (!airlineLogo) {
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
      <span className="list-item-cell list-item-cell_time">{moment(localTime).format('H:mm')}</span>
      <span className="list-item-cell list-item-cell_way">{airport}</span>
      <span className="list-item-cell list-item-cell_status">
        {getFlightStatus(status, timeTakeofFact, timeLandFact)}
      </span>
      <span className="list-item-cell list-item-cell_airline">
        <img className="list-item-cell_logo" src={airlineLogo} />
        {airlineName}
      </span>
      <span className="list-item-cell list-item-cell_flight">{codeShareData}</span>
    </li>
  );
};

export default Flight;

Flight.propTypes = {
  term: PropTypes.string.isRequired,
  timeLandFact: PropTypes.string,
  timeTakeofFact: PropTypes.string,
  localTime: PropTypes.string,
  airlineLogo: PropTypes.string,
  airlineName: PropTypes.string,
  airport: PropTypes.string,
  codeShareData: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
