import React from 'react';

// import PropTypes from 'prop-types';

const Statistics = props => (
  <>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total : {props.total}</p>
    <p>Positive feedback : {props.positivePercentage}%</p>
  </>
);
export default Statistics;
