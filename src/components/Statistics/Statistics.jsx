import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <ul className={css.ul}>
      {statistics.map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li key="total">Total:{total}</li>
      <li key="positive">Positive feedback:{positivePercentage} %</li>
    </ul>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;