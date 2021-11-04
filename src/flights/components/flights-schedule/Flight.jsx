import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ListElement from './ListElement.jsx';
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
      <ListElement classList="list-item-cell_terminal">
        <span
          className={`list-item-cell_term ${selectClass(
            'list-item-cell_term-A',
            'list-item-cell_term-D',
            term !== 'A',
          )}`}
        >
          {term}
        </span>
      </ListElement>
      <ListElement classList="list-item-cell_time" value={moment(localTime).format('H:mm')} />
      <ListElement classList="list-item-cell_way" value={airport} />
      <ListElement
        classList="list-item-cell_status"
        value={getFlightStatus(status, timeTakeofFact, timeLandFact)}
      />
      <ListElement classList="list-item-cell_airline" value={airlineName}>
        <img className="list-item-cell_logo" src={airlineLogo} />
      </ListElement>
      <ListElement classList="list-item-cell_flight" value={codeShareData} />
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
